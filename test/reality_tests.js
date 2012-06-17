var should = require('should');

describe('Reality',function(){
	it('should obey laws of nature', function(){
		true.should.equal(true);
	});
	it('should exist', function(){
		should.exist({'some':'foo'});
	});
});