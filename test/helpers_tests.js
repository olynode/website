var helpers = require('../lib/helpers').helpers;

describe('helpers', function(){
	describe('google map link', function(){
		var venue = { address_1: 'address', zip: 'zip' },
		    expected = 'https://maps.google.com/maps?q=address+zip',
   		    actual = helpers.googleMapLink(venue);

		it('creates google map links to a venue', function(){
			expected.should.equal(actual);
		});	
	});

	describe('pretty date', function(){
		var input = { time: 1341279000000, utc_offset: -25200000 },
		    expected = 'Monday, July 2nd 2012 6:30:00 PM',
		    actual = helpers.prettyDate(input.time, input.utc_offset);

		it('prints a pretty date in the correct time zone', function(){
			expected.should.equal(actual);
		});
	});
});