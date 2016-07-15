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
	var regexQuery = '*' + team + "*"; 
	var query = Tweet.find({'text': 'india'}, 'twid text name avatar');
	query.sort({date: 'desc'});
	query.limit(10);

	query.exec(function(err, docs) {
		if(err) return console.error(err);
		console.log("Here");
		console.log(JSON.stringify(docs, null, 5));
	});
}

module.exports = Tweet = mongoose.model('tweet', tweetSchema);
