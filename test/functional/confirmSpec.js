process.env.NODE_ENV = 'test';
var http = require('http');
var app = require('../../app');
var Browser = require('zombie');
var assert = require('assert');

describe('confirm', function() {

  before(function() {
    this.server = http.createServer(app).listen(3000);
    this.browser = new Browser({ site: 'http://localhost:3000' });
  });

  before(function(done) {
    this.browser.visit('/confirm', done);
  });

  it('confirms booking', function() {
    assert.ok(this.browser.success);
    assert.equal(this.browser.text('h3'), 'Booking confirmed');
  });

  after(function(done) {
    this.server.close(done);
  });
});
