var mongo = require('mongoskin'),
    dbhost = process.env.MONGOLAB_URI || 'localhost/olynode';


var openDb = function(){
  return mongo.db(dbhost);
};

var saveMeeting = function(meeting){
	openDb().collection('meetings').save(meeting, function(error, data) {
		if(error)
			console.log('mongo threw an error: ' + error);
		else
			console.log('saved meeting: ' + data.id);
	});
};

exports.saveMeeting = saveMeeting;