// force the test environment to 'test'
process.env.NODE_ENV = 'test';
var http = require('http');
// get the application server module
var app = require('../../app');
// use zombie.js as headless browser
var Browser = require('zombie');
var assert = require('assert');

describe('homepage', function() {

  before(function() {
    this.server = http.createServer(app).listen(3000);
    // initialize the browser using the same port as the test application
    this.browser = new Browser({ site: 'http://localhost:3000' });
  });

  // load the contact page
  before(function(done) {
    this.browser.visit('/', done);
  });

  it('should welcome to Ezey BnB', function(){
    assert.ok(this.browser.success);
    assert.equal(this.browser.text('h1'), 'Ezey BnB');
    assert.equal(this.browser.text('p'), 'Welcome to Ezey BnB');
  });

  it('should have signUp button', function() {
    assert.ok(this.browser.success);
    assert.equal(this.browser.text('h2'), 'Please sign Up');
    this.browser.assert.element('form input[type=submit]');
  });

  after(function(done) {
    this.server.close(done);
  });
});
