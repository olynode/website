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

exports.channel = function(req, res){
    var oneYear = 60*60*24*365;
    res.header('Pragma', 'public');
    res.header('Cache-Control','max-age=' + oneYear);
    res.header('Expires', new Date(Date.now() + oneYear).toUTCString());
    res.send('<script src="//connect.facebook.net/en_US/all.js"></script>');
};