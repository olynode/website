'use strict';

var sys = require('util'),
    http = require('http'),
	rest = require('restler');

var meetupKey = 'key=' + process.env.MEETUPKEY;
var groupId = 'group_id=4053462';
var api = 'https://api.meetup.com/2/';

var getHistory = function(callback) {
var url = api + 'events.json?group_id=4053462&status=past&sign=true&' + meetupKey;
	rest.get(url).on('complete',function(result){
		if(result instanceof Error) {
			sys.puts('Error: ' + result.message);
		} else {
            callback(result.results);
        }
	});
};

var getMeetings = function(callback){
	var url = api + 'events.json?group_id=4053462&page=20&sign=true&' + meetupKey;
	rest.get(url).on('complete',function(result){
		if(result instanceof Error) {
			sys.puts('Error: ' + result.message);
		} else {
			callback(result.results);
		}
	});
};

var getMeeting = function(id, callback){
	var url = api + 'event/' + id + '?' + meetupKey;
		rest.get(url).on('complete',function(result){
			if(result instanceof Error) {
				sys.puts('Error: ' + result.message);
			} else {
				callback(result);
			}
		});
};

exports.getHistory = getHistory;
exports.getMeetings = getMeetings;
exports.getMeeting = getMeeting;