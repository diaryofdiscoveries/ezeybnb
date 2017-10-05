var Property = function(name, location, price, description) {
  this.name = name;
  this.location = location;
  this.price = price;
  this.description = description;
  this.booked = false;
};

Property.prototype.isBooked = function() {
  return this.booked;
};

Property.prototype.book = function() {
    this.booked = true;
};

module.exports = Property;
