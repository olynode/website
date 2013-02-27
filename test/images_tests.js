/*globals it, describe, beforeEach */

'use strict';

var images = require('../lib/images'),
    expect = require('expect.js');

describe('images', function() {
  it('exists', function() {
    expect(images).to.not.be(undefined);
  });

  describe("getHeaderImage", function() {
    var img;

    beforeEach(function() {
      img = images.getHeaderImage();
    });

    it("gets an image", function() {
      expect(img).to.not.be(null);
    });

    it("has an image path", function() {
      expect(img.url).to.not.be.empty();
    });

    it("has an original source url", function() {
      expect(img.srcUrl).to.not.be.empty();
    });

    it("has a source author", function() {
      expect(img.srcAuthor).to.not.be.empty();
    });
  });
});