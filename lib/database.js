var mongo = require('mongoskin'),
    dbhost = process.env.MONGOLAB_URI || 'localhost/olynode';


var openDb = function(){
  return mongo.db(dbhost, { safe: true });
};

var saveMeeting = function(meeting, callback){
	openDb().collection('meetings').save(meeting, callback);
};

var getMeetingById = function(id, callback){
	openDb().collection('meetings').findOne({id: id}, callback);
};

exports.saveMeeting = saveMeeting;
exports.getMeetingById = getMeetingById;