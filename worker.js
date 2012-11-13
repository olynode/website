var meetup = require('./lib/meetupApi');

meetup.getMeetings(function(meetings){
	meetings.forEach(function(meeting){
		//check if meeting.id exist in db
			//check if meeting.updated date is newer
				//update existing meeting
		//else insert meeting
		console.log(meeting);
	});
});