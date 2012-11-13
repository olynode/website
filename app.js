
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , mongo = require('mongoskin');

var app = module.exports = express.createServer();

// Configuration

app.helpers(require('./lib/helpers').helpers);

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes
if (process.env.MONGOLAB_URI) {
  mongoUrl = process.env.MONGOLAB_URI; 
}
else {
  mongoUrl = 'localhost';
}
mongoUrl += '/olynode';
var db = mongo.db(mongoUrl);
meetingDb = db.collection('meeting');
meeting = {};
meeting.slug = 'some-meeting';
meetingDb.save(meeting, function(error, data) {
  if (error) {
    console.log('Mongo threw an error: ' + error);
  }
  else {
    console.log('It saved!');
  }
});

app.get('/', routes.index);

var port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
