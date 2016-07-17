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
	, screenname: String
	, followers	: Number
	, date 		: Date
});

tweetSchema.statics.getTweets = function(team, callback) {
	var regexQuery = team; 
	var query = Tweet.find({'text' : {$regex : regexQuery, $options: 'i'}, 'followers': {$gte: 1000}}, 'twid text name avatar screenname');
	query.sort({date: 'desc'});
	query.limit(20);

	var tweets = []

	query.exec(function(err, docs) {
		if(err) return console.error(err);
		tweets = docs;
		//console.log(JSON.stringify(tweets,null,5));
		callback(tweets);
	});
	
}

module.exports = Tweet = mongoose.model('tweet', tweetSchema);
