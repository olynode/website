var database = require('../lib/database'),
	headImage = require('../lib/headImage');
/*
 * GET home page.
 */

exports.route = function(req, res){
  database.getMeetings(function(error, meetings){
  	  res.render('home', { 
	  	title: 'Welcome to OlyNode', 
	  	meetings: meetings, 
	  	headImage: headImage.getImage() 
	  });
  });
};