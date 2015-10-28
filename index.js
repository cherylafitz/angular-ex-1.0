// set up ========================

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan'); // log requests to the console (express4)
var bodyParser = require('body-parser'); // pull information from HTML POST (express4)
var methodOverride = require('method-override');


// configuration =================

// Connect to the db

// var db = mongoose.connection;

// db.on('error', console.error);
// db.once('open', function() {
//   // Create your schemas and models here.
// });

// mongoose.connect('mongodb://<user>:<pass>@apollo.modulusmongo.net:27017/a9xAtogi');
// // mongoose.connect('mongodb://localhost/test');

app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
    app.use(morgan('dev'));                                         // log every request to the console
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    app.use(methodOverride());

// // define model =================
// var Vote = mongoose.model('Vote', {
//     gender: String,
//     votes: { type: Number, default: 0 }
// });


// routes ======================================================================

// api ---------------------------------------------------------------------
// get votes
// app.get('/api/votes', function(req, res) {

//     // use mongoose to get all votes in the database
//     Vote.find(function(err, votes) {

//         // if there is an error retrieving, send the error. nothing after res.send(err) will execute
//         if (err)
//             res.send(err)

//         res.json(votes); // return all votes in JSON format
//     });
// });

//  app.get('/api/resetfemale', function(req, res) {

//     // create a vote, information comes from AJAX request from Angular
//     Vote.create({
//         gender : 'female',
//         votes : 0
//     }, function(err, vote) {
//         if (err)
//             res.send(err);

//         // get and return all the votes after you create another
//         Vote.find(function(err, votes) {
//             if (err)
//                 res.send(err)
//             res.json(votes);
//         });
//     });

// });
// app.get('/api/resetmale', function(req, res) {

//   // create a vote, information comes from AJAX request from Angular
//   Vote.create({
//       gender : 'male',
//       votes : 0
//   }, function(err, vote) {
//       if (err)
//           res.send(err);

//       // get and return all the votes after you create another
//       Vote.find(function(err, votes) {
//           if (err)
//               res.send(err)
//           res.json(votes);
//       });
//   });

// });

// app.get('/api/femalevote', function(req, res) {

//     // create a vote, information comes from AJAX request from Angular
//     Vote.update({gender: "female"}, { $inc: {female: 1} } ), function(err,doc){

//     }

// });

app.get('/api/malevote', function(req, res) {


});


// listen (start app with node server.js) ======================================
app.listen(process.env.PORT || 3000)
console.log("App listening on port 3000");
