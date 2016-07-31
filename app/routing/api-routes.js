// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources. 
// These data sources hold
// ===============================================================================
var listFriends = require('../data/friends.js');
var path = require('path');
var bodyParser = require('body-parser');

// ===============================================================================
// ROUTING
// ===============================================================================




function friendScores(){

        var totalScore = 0;
        for(var i =0; i<listFriends[i].scores; i++){


           totalScore += listFriends[i].scores;

        }

      }

 module.exports = function(app) {

  app.get("/api/friends", function(req,res) {
    res.json(friendData);
  });

  app.post("/api/friends",function(req,res){

    var friend = req.body;
    listFriends.push(friend);
    res.json(listFriends);
    friendScores
  });

  app.post('/api/clear', function(req,res){


        listFriends= [];
  })
 }