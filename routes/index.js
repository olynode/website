var database = require('../lib/database'),
	headImage = require('../lib/headImage');
/*
 * GET home page.
 */

exports.index = function(req, res){
  database.getMeetings(function(error, meetings){
  	  res.render('index', { 
	  	title: 'Welcome to OlyNode', 
	  	meetings: meetings, 
	  	headImage: headImage.getImage() 
	  });
  });
};