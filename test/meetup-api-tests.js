var meetup = require('../lib/meetup-api'),
	should = require('should');
	
describe('meetup-api', function(){
	it('exists',function(){
		should.exist(meetup);
	});
	it('can get meetings', function(done){
		meetup.getMeetings(function(meetings) {
			meetings.should.not.be.empty;
			meetings[0].should.exist;
			meetings[0].visibility.should.equal('public');
			done();
		});
	});
});