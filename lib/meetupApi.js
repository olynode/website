var sys = require('util'),
    http = require('http'),
	rest = require('restler');

var meetupKey = process.env.MEETUPKEY;

var url = 'https://api.meetup.com/2/events.json?key=' + meetupKey + '&sign=true&group_id=4053462&page=20';

var getMeetings = function(callback){
	rest.get(url).on('complete',function(result){
		if(result instanceof Error) {
			sys.puts('Error: ' + result.message);
		} else {
			var obj = JSON.parse(result);
		    callback(obj.results);
	   }
	});
};

exports.getMeetings = getMeetings;