'use strict';

var database = require('../lib/database'),
    images = require('../lib/images');

exports.route = function(req, res){
  database.getPastMeetings(function(error, meetings){
      res.render('history', {
        title: 'Past Meeting with Olynode',
        meetings: meetings,
        headerImage: images.getHeaderImage()
      });
  });
};