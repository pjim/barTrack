var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes/routes.js');
var app = express();
var credentials = require('./credentials.js');

app.use(bodyParser.json());
app.use(express.static('frontend/dist'));

app.use('/',routes);


module.exports = app;
app.listen(port, function(){
	console.log('express server started');
});
