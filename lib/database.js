var mongo = require('mongoskin'),
    dbhost = process.env.MONGOLAB_URI || 'localhost/olynode';


var openDb = function(){
  return mongo.db(dbhost, { safe: true });
};

var getMeetings = function(callback){
	openDb().collection('meetings').find({ time: { $gte: Date.now() } }, function(error, cursor){
		cursor.toArray(callback);
	});
};

var getPastMeetings = function(callback){
	openDb().collection('meetings').find({ time: { $lte: Date.now() } }, function(error, cursor){
		cursor.toArray(callback);
	});
};

var saveMeeting = function(meeting, callback){
	openDb().collection('meetings').update({ id: meeting.id },meeting, { upsert: true }, callback);
};

var getMeetingById = function(id, callback){
	openDb().collection('meetings').findOne({id: id}, callback);
};

exports.getMeetings = getMeetings;
exports.getPastMeetings = getPastMeetings;
exports.saveMeeting = saveMeeting;
exports.getMeetingById = getMeetingById;