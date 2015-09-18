//var credentials = require('./credentials.js');
var RSVP = require('rsvp');
var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;
var User = require('./models/models.js').user;

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

passport.use(new TwitterStrategy({
    consumerKey:process.env.TWITTER_CONSUMER_KEY,
    consumerSecret:process.env.TWITTER_CONSUMER_SECRET,
    callbackURL:'http://blooming-wildwood-2253.herokuapp.com/'
},
    function(token,tokenSecret,profile,cb){
        User.findOne({uid:profile.id}, function(err, user){
         if(user){
             console-log('user found in db');
            done(null,user);
        }else{
            var user = new User();
            user.provider = "twitter";
            user.uid = profile.id;
            user.name = profile.displayName;
            user.image = profile._json.profile._image_url;
            user.save(function(err){
                console.log('new twitter user save to our db');
                if(err){throw err;}
                done(null,user);

            });
        }});
    }
                                ));

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

module.exports.twitter = passport.authenticate('twitter');


