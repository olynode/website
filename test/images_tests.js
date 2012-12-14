var images = require('../lib/images'),
    should = require('should');

describe('images', function() {
  it('exists', function() {
    should.exist(images);
  });

  describe("getHeaderImage", function() {
    var img;

    beforeEach(function() { 
      img = images.getHeaderImage();
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