//var credentials = require('./credentials.js');
var RSVP = require('rsvp');
var RSVP = require('rsvp');

/*var yelp =require('yelp').createClient({
     consumer_key:credentials.oAuth.consumerKey,
     consumer_secret:credentials.oAuth.consumerSecret,
     token:credentials.oAuth.token,
     token_secret:credentials.oAuth.tokenSecret
});*/
var yelp =require('yelp').createClient({
     consumer_key:process.env.CONSUMER_KEY,
     consumer_secret:process.env.CONSUMER_SECRET,
     token:process.env.TOKEN,
     token_secret:process.env.TOKEN_SECRET
});

module.exports.yelp = function(req,res){
	var yelpJson;
    var queryS = req.query;
    console.log(queryS);
	var yelpPromise = new RSVP.Promise(function(resolve,rej){
        yelp.search({term:'bar',location:queryS.location}, function(error,data){
        console.log(error);
		console.log('call to yelp complete');
	    yelpJson = data.businesses;
		resolve();
        res.json(yelpJson);
	    });
	});


}
