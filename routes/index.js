var meetup = require('../lib/meetupApi');
/*
 * GET home page.
 */

exports.index = function(req, res){
  meetup.getMeetings(function(meetings){
	  res.render('index', { title: 'Welcome to OlyNode', meetings: meetings });
  });

};