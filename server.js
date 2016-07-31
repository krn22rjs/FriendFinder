// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Express Configuration
// This sets up the basic properties for our express server.
// =============================================================
var app = express();
var Port = process.env.Port || 3000;

// body parser will make it easier for the server to  iterpret data sent to it.

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


// Routes
// =============================================================

require('/app/routing/api-routes.js')(app);
require('app/routing')



// Starts the server to begin listening 
// =============================================================
app.listen(PORT, function(){
  console.log('App listening on PORT ' + PORT);
})