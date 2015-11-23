// set up ========================

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan'); // log requests to the console (express4)
var bodyParser = require('body-parser'); // pull information from HTML POST (express4)
var methodOverride = require('method-override');


// configuration =================


app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
    app.use(morgan('dev'));                                         // log every request to the console
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    app.use(methodOverride());

var femaleVotes = 0;
var maleVotes = 0;

app.get('/api/vote', function(req, res) {
  res.send({femaleVotes: femaleVotes, maleVotes: maleVotes});
});


app.post('/api/vote/:gender', function(req, res) {
  if (req.params.gender === 'female') {
    femaleVotes += 1;
    res.send({female: femaleVotes});
  } else if (req.params.gender === 'male') {
    maleVotes += 1;
    res.send({male: maleVotes});
  } else {
    res.send({error: error});
  }
  console.log(femaleVotes)
});


// listen (start app with node server.js) ======================================
app.listen(process.env.PORT || 3000)
console.log("App listening on port 3000");
