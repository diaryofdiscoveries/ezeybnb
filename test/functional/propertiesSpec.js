// force the test environment to 'test'
process.env.NODE_ENV = 'test';
var http = require('http');
// get the application server module
var app = require('../../app');
// use zombie.js as headless browser
var Browser = require('zombie');
var assert = require('assert');

describe('properties', function() {

  before(function() {
    this.server = http.createServer(app).listen(3000);
    // initialize the browser using the same port as the test application
    this.browser = new Browser({ site: 'http://localhost:3000' });
  });

  // load the contact page
  before(function(done) {
    this.browser.visit('/properties', done);
  });

  it('should show Properties unordered list', function(){
    assert.ok(this.browser.success);
    assert.equal(this.browser.text('h1'), 'Properties');
    this.browser.assert.elements('#property_list_item');
  });

  after(function(done) {
    this.server.close(done);
  });
});
