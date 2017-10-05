var Property = require('../js/property');
var expect = require('chai').expect;

describe('Property', function() {
  var property;

  beforeEach(function() {
    property = new Property("The Garden House", "Chichester", "250", "3 beds, 2 baths");
  });

  it('adds a property name', function() {
    expect(property.name).to.equal("The Garden House");
  });

  it('adds a property location', function() {
    expect(property.location).to.equal("Chichester");
  });

  it('adds a property price per night', function() {
    expect(property.price).to.equal("250");
  });

  it('adds a property description', function() {
    expect(property.description).to.equal("3 beds, 2 baths");
  });

  it('is not booked by default', function() {
    expect(property.isBooked()).to.equal(false);
    });

  it('can be booked', function() {
    property.book();
    expect(property.isBooked()).to.equal(true);
  });
});
