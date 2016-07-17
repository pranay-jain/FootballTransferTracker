var Tweet = require('./model/MongoHandler');

module.exports = function(stream, io) {

	stream.on('data', function(data) {
    
    //console.log(JSON.stringify(data, null, 5));   
    //console.log(data["entities"]["user_mentions"]["name"]);    
    if (data['user'] !== undefined) {
        var newTweet = {
    			twid: data['id_str'],
    			text: data['text'],
    			name: data['user']['name'],
    			avatar: data['user']['profile_image_url'],
          screenname: data['user']['screen_name'],
          followers: data['user']['followers_count'], 
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