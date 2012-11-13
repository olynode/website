var meetup = require('./lib/meetupApi'),
    database = require('./lib/database');;

meetup.getMeetings(function(meetings){
	meetings.forEach(function(meeting){
		database.saveMeeting(meeting);
		//check if meeting.id exist in db
			//check if meeting.updated date is newer
				//update existing meeting
		//else insert meeting
		console.log(meeting);
	});
});