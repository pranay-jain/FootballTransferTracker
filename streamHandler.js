var databaseEntry = require('./model/MongoHandler');

module.exports = function(stream) {

	stream.on('data', function(data) {
  		//console.log(JSON.stringify(tweet, null, 5));
  		var newTweet = {
  			twid: data['id_str'],
  			text: data['text'],
  			name: data['user']['name'],
  			avatar: data['user']['profile_image_url']
  		};
  		console.log(JSON.stringify(newTweet, null, 5));
	});
}