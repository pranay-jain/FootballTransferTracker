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
	, date 		: Date
});

tweetSchema.statics.getTweets = function(team) {
	var regexQuery = team; 
	var query = Tweet.find({'text' : {$regex : regexQuery }}, 'twid text name avatar');
	query.sort({date: 'desc'});
	query.limit(10);

	var tweets = []

	query.exec(function(err, docs) {
		if(err) return console.error(err);
		//console.log("Here");
		// console.log(JSON.stringify(docs, null, 5));
		tweets = docs;
	});
	callback(tweets);
}

module.exports = Tweet = mongoose.model('tweet', tweetSchema);
