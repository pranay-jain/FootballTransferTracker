var Tweet = require('./model/MongoHandler');

module.exports = function(stream, io) {

	stream.on('data', function(data) {

    if (data['user'] !== undefined) {
        var newTweet = {
    			twid: data['id_str'],
    			text: data['text'],
    			name: data['user']['name'],
    			avatar: data['user']['profile_image_url'],
          date: data['created_at']
    		};
    }

  		var tweetEntry = new Tweet(newTweet);
  		//console.log(JSON.stringify(tweetEntry, null, 5)); 		

  		tweetEntry.save(function (err, tweet) {
  			if (err) return console.error(err);
        io.emit('tweet', tweet);
  		});
	});
}