var sys = require('util'),
    http = require('http'),
	rest = require('restler');

var meetupKey = 'key=' + process.env.MEETUPKEY;
var groupId = 'group_id=4053462'
var api = 'https://api.meetup.com/2/';

var getMeetings = function(callback){
	var url = api + 'events.json?group_id=4053462&page=20&sign=true&' + meetupKey;
	rest.get(url).on('complete',function(result){
		if(result instanceof Error) {
			sys.puts('Error: ' + result.message);
		} else {
			var obj = JSON.parse(result);
		    callback(obj.results);
	   }
	});
};

var getMeeting = function(id, callback){
	var url = api + 'event/' + id + '?' + meetupKey;
		rest.get(url).on('complete',function(result){
			if(result instanceof Error) {
				sys.puts('Error: ' + result.message);
			} else {
				var obj = JSON.parse(result);
			    callback(obj);
		   }
		});
};

exports.getMeetings = getMeetings;
exports.getMeeting = getMeeting;