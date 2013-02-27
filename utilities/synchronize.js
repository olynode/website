'use strict';

 var meetup = require('../lib/meetup'),
    database = require('../lib/database'),
    async = require('async');



var onComplete = function(){
	console.log('worker process complete');
	process.exit(0);
};

var onMeeting = function(meeting, done) {
	database.saveMeeting(meeting, function(error, data){
		console.log('saved: ' + meeting.id + ' - ' + meeting.name);
		done();
	});
};

var onMeetings = function(meetings) {
	async.forEach(meetings, onMeeting, onComplete);
};

console.log('worker process started');

meetup.getMeetings(onMeetings);