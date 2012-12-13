var home = require('./home');
var pastMeetings = require('./pastMeetings');


module.exports = function(app) {
	app.get('/', home.route);
	app.get('/pastMeetings', pastMeetings.route);
};