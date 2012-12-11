 var meetup = require('./lib/meetupApi'),
    database = require('./lib/database'),
    async = require('async');



var onMeetings = function(meetings) {
	async.forEach(meetings, onMeeting, onComplete);
};

var onMeeting = function(meeting, done) {
	database.saveMeeting(meeting, function(error, data){
		console.log('saved: ' + data.id);
		done();
	});
};

var onComplete = function(){
	console.log('worker process complete');
	process.exit(0);
};

console.log('worker process started');

meetup.getMeetings(onMeetings);

//check if meeting.id exist in db
			//check if meeting.updated date is newer
				//update existing meeting
		//else insert meeting