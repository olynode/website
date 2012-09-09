var meetup = require('../lib/meetupApi');
var headImage = require('../lib/headImage');
/*
 * GET home page.
 */

exports.index = function(req, res){
  meetup.getMeetings(function(meetings){
	  res.render('index', { 
	  	title: 'Welcome to OlyNode', 
	  	meetings: meetings, 
	  	headImage: headImage.getImage() 
	  });
  });
};