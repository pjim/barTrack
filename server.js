var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes/routes.js');
var app = express();
var passport = require('passport');
//var credentials = require('./credentials.js');

app.use(bodyParser.json());
app.use(express.static('frontend/dist'));
app.use(passport.initialize());
app.use(passport.session());
app.use('/',routes);


module.exports = app;
app.listen(process.env.PORT || 3000, function(){
	console.log('express server started');
});
