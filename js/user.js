var User = function(name, username, email, password) {
  this.name = name;
  this.username = username;
  this.email = email;
  this.password = password;
};

User.prototype.addProperty = function(property) {
  this.property = property;
};

module.exports = User;
