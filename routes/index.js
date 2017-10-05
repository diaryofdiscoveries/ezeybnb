var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var Property = require('../js/property');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ezey BnB' });
});

router.get('/properties', function(req, res){
  var MongoClient = mongodb.MongoClient;

  var url = 'mongodb://localhost:27017/ezeybnbdb';

  MongoClient.connect(url, function(err, db){
    if(err){
      console.log('Unable to connect to the server', err);

    } else {
      console.log("Connection Established");

      var collection = db.collection('properties');

      collection.find({}).toArray(function(err, result){
        if (err){
          res.send(err);
        } else if (result.length){
          res.render('propertylist', {
            "propertylist" : result
          });
        } else {
          res.send('No documents found');
        }

        db.close();
      });
    }
  });
});

router.get('/newproperty', function(req, res){
  res.render('newproperty', {title: 'Add Property'});
});

router.post('/addproperty', function(req, res) {
  var MongoClient = mongodb.MongoClient;

  var url = 'mongodb://localhost:27017/ezeybnbdb';

  MongoClient.connect(url, function(err, db) {
    if (err) {
      console.log("Unable to connect to server, err", err);
    } else {
      console.log("Connected to server");

      var collection = db.collection('properties');

      var property1 = {name: req.body.name,
        description: req.body.description,
        location: req.body.location,
        price: req.body.price};

      collection.insert([property1], function(err, result){
        if (err){
          console.log(err);
        } else {
          res.redirect("properties");
        }
        db.close();
      });
    }
  });
});

router.get('/confirm', function(req, res){
  res.render('confirm', {title: 'Booking confirmed'});
});

router.post('/book', function(req, res) {
  var MongoClient = mongodb.MongoClient;

  var url = 'mongodb://localhost:27017/ezeybnbdb';

  MongoClient.connect(url, function(err, db) {
    if (err) {
      console.log("Unable to connect to server, err", err);
    } else {
      console.log("Connected to server");

      var collection = db.collection('properties');

      collection.update({name : req.body.PropertyName}, {$set : {booked : true}});
        res.redirect("confirm");
      }
        db.close();
  });
});

module.exports = router;
