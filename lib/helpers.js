var moment = require('moment');

exports.helpers = {
	futureDate: function(input) {
		return moment(input).format("dddd, MMMM Do YYYY h:mm:ss A");
	},
	googleMapLink: function(venue) {
		return 'https://maps.google.com/maps?q=' + venue.address_1+'+'+venue.zip;
	}
}