var Tweet = require('./model/MongoHandler');

module.exports = function(stream, io) {

	stream.on('data', function(data) {
      
    if (data['user'] !== undefined) {
        var newTweet = {
    			twid: data['id_str'],
          active: false,
    			text: data['text'],
    			name: data['user']['name'],
    			avatar: data['user']['profile_image_url'],
          screenname: data['user']['screen_name'],
          followers: data['user']['followers_count'], 
          date: data['created_at']
    		};
    }

  		var tweetEntry = new Tweet(newTweet);

  		tweetEntry.save(function (err) {
  			if (err) return console.error(err);
        io.emit('tweet', newTweet);
  		});
	});
}