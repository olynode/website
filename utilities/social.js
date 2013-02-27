'use strict';

var Twitter = require('ntwitter'),
	database = require('../lib/database');


var twit = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

twit.updateStatus('Test tweet from ntwitter/' + Twitter.VERSION, function(error, data) {
	if(error) console.log(error);
	console.log(data);
});

var tweetMeeting  = function(error, meeting){
	console.log(meeting[0]);
	twit.updateStatus(meeting[0].name, function(error, data) {
		if(error) console.log(error);
		console.log(data);
	});
};

database.findMeetingBy({ time: { $gte: Date.now() } }, tweetMeeting);

