var User = require('../js/user');
var expect = require('chai').expect;

describe('User', function() {

    it('adds a property', function() {
        var user = new User();
        user.addProperty("Summer House");
        expect(user.property).to.equal("Summer House");
    });
});
