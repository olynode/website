var headImage = require('../lib/headImage'),
    should = require('should');

describe('headImage', function() {
  it('exists', function() {
    should.exist(headImage);
  });

  describe("getImage", function() {
    var img;

    beforeEach(function() { 
      img = headImage.getImage();
    });

    it("gets an image", function() {
      img.should.not.be.null;
    });

    it("has an image path", function() {
      img.url.should.not.be.empty;
    });

    it("has an original source url", function() {
      img.srcUrl.should.not.be.empty;
    });

    it("has a source author", function() {
      img.srcAuthor.should.not.be.empty;
    });
  });
});