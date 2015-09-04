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

module.exports = router;