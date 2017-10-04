process.env.NODE_ENV = 'test';
var http = require('http');
var app = require('../../app');
var Browser = require('zombie');
var assert = require('assert');

describe('new property', function() {

  before(function() {
    this.server = http.createServer(app).listen(3000);
    this.browser = new Browser({ site: 'http://localhost:3000' });
  });

  before(function(done) {
    this.browser.visit('/newproperty', done);
  });

  it('should show property host a form', function() {
    assert.ok(this.browser.success);
    assert.equal(this.browser.text('h3'), 'Add Property');
    assert.equal(this.browser.text('span'), 'Name Location Price Description');
  });

  after(function(done) {
    this.server.close(done);
  });
});
