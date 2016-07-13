var mongoose = require('mongoose');

var db = mongoose.connection;
db.on('error', function () {
	console.log("Couldn't establish a database");
});

var tweetSchema = new mongoose.Schema(
{
	  twid 		: String
	, text 		: String
	, name 		: String
	, avatar 	: String
});

module.exports = mongoose.model('tweet', tweetSchema);
