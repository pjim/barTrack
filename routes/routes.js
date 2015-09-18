var express = require('express');
var handlers = require('../handlers.js');
var router = express.Router();

router.get('/api',function(req,res){
	res.json({message:'welcome to the api'});
});
router.get('/', function  (req,res) {
	res.sendFile('index.html');
});

router.get('/yelp',handlers.yelp);

router.get('/twitterAuth',handlers.twitter, function(req,res){});

module.exports = router;
