var meetup = require('../lib/meetup'),
	should = require('should');
	
describe('meetup-api', function(){
	
	it('exists',function(){
		should.exist(meetup);
	});

	it('requires an environment variable MEETUPKEY', function(){
		process.env.MEETUPKEY.should.exist;
	});
	
	it('can get a list of meetings', function(done){
		meetup.getMeetings(function(meetings) {
			meetings.should.not.be.empty;
			done();
		});
	});

	it('can get metting details', function(done){
		meetup.getMeeting('68694152', function(meeting){
			meeting.should.not.be.null;
			done();
		});
	});
});