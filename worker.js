var meetup = require('./lib/meetupApi'),
    database = require('./lib/database');;

console.log('worker process started');

meetup.getMeetings(function(meetings){
	meetings.forEach(function(meeting){
		database.saveMeeting(meeting);
		//check if meeting.id exist in db
			//check if meeting.updated date is newer
				//update existing meeting
		//else insert meeting
	});
	console.log('worker process ended');
	process.exit(0);
});