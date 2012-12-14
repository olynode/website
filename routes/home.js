var database = require('../lib/database'),
	images = require('../lib/images');
/*
 * GET home page.
 */

exports.route = function(req, res){
  database.getMeetings(function(error, meetings){
  	  res.render('home', { 
	  	title: 'Welcome to OlyNode', 
	  	meetings: meetings, 
	  	headerImage: images.getHeaderImage() 
	  });
  });
};