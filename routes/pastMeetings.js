var database = require('../lib/database'),
	headImage = require('../lib/headImage');
/*
 * GET past meetings
 */

exports.route = function(req, res){
  database.getPastMeetings(function(error, meetings){
  	  res.render('pastMeetings', { 
	  	title: 'Past Meeting with Olynode', 
	  	meetings: meetings, 
	  	headImage: headImage.getImage() 
	  });
  });
};