var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    provider: String,
    uid: String,
    name: String,
    image: String,
    created: {type: Date, default: Date.now}
});

var dbuser = process.env.DBUSER;
var dbpassword = process.env.DBPASS;
var connectString =   'mongodb://' + dbuser + ':' + dbpassword + '@ds033097.mongolab.com:33097/bartrackbase'

mongoose.connect(connectString);

exports.user = mongoose.model('User', UserSchema);




