// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources. 
// These data sources hold
// ===============================================================================

var path = require('path');
var listFriends = require('../data/friends.js');
var bodyParser = require('body-parser');

// ===============================================================================
// ROUTING
// ===============================================================================


module.exports = function(app) {

  app.get("/api/friends", function(req,res) {
    res.json(friendData);
  });

     app.post("/api/friends", function (req, res){
          friendData.push(req.body);
          res.json(friendData);
     });

};