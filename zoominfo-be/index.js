var express = require('express');

// Create a service (the app object is just a callback).
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var users = require('./user_routes')(app);
var questions = require('./data-service.js');

var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://jonathanohayon1:robert26@cluster0-yka0j.mongodb.net/test?retryWrites=true&w=majority');

// use it before all route definitions
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
  
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
    // Pass to next layer of middleware
    next();
  });

var cors = require('cors');
// use it before all route definitions
app.use(cors({origin: '*'}));

app.listen(3002, function () {
    console.log('Example app listening on port 3002!')
  })

