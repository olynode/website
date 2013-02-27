/*globals it, describe */

'use strict';

var helpers = require('../lib/helpers').helpers,
    expect = require('expect.js');

describe('helpers', function(){
    describe('google map link', function(){
        var venue = { address_1: 'address', zip: 'zip' },
            expected = 'https://maps.google.com/maps?q=address+zip',
            actual = helpers.googleMapLink(venue);

        it('creates google map links to a venue', function(){
            expect(expected).to.equal(actual);
        });
    });

    describe('pretty date', function(){
        var time = 1341279000000,
            expected = 'Monday, July 2nd 2012 6:30:00 PM',
            actual = helpers.prettyDate(time);

        it('prints a pretty date in the correct time zone', function(){
            expect(expected).to.equal(actual);
        });
    });
});