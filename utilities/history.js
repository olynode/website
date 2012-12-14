 var meetup = require('../lib/meetup'),
    database = require('../lib/database'),
    async = require('async');



var onMeetings = function(meetings) {
	async.forEach(meetings, onMeeting, onComplete);
};

var onMeeting = function(meeting, done) {
	database.saveMeeting(meeting, function(error, data){
		console.log('saved: ' + meeting.id + ' - ' +meeting.name);
		done();
	});
};

var onComplete = function(){
	console.log('worker process complete');
	process.exit(0);
};

console.log('worker process started');

meetup.getHistory(onMeetings);