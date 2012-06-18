var moment = require('moment');

exports.helpers = {
	prettyDate: function(input_date, utc_offset) {
		return moment(input_date).utc()
		       .add('milliseconds', utc_offset)
		       .format("dddd, MMMM Do YYYY h:mm:ss A");
	},
	googleMapLink: function(venue) {
		return 'https://maps.google.com/maps?q=' + venue.address_1+'+'+venue.zip;
	}
}