/*globals it, describe */

'use strict';

var meetup = require('../lib/meetup'),
    expect = require('expect.js');
    
describe('meetup-api', function(){
    
    it('exists',function(){
        expect (meetup).to.not.be(undefined);
    });

    it('requires an environment variable MEETUPKEY', function(){
        expect(process.env.MEETUPKEY).to.not.be(undefined);
    });
    
    it('can get a list of meetings', function(done){
        meetup.getMeetings(function(meetings) {
            expect(meetings).to.not.be.empty();
            done();
        });
    });

    it('can get metting details', function(done){
        meetup.getMeeting('68694152', function(meeting){
            meeting.should.not.be(null);
            done();
        });
    });
});