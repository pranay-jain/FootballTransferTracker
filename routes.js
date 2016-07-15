var babel = require('babel-register'),
	React = require('react'),
	ReactDOMServer = require('react-dom/server'),
	Tweet = require('./model/MongoHandler'),
	Interface = require('./react-components/interface.react'),
	Index = require('./react-components/index.react');

module.exports = {
	home: function (req, res) {
		var markup = ReactDOMServer.renderToString(<Index />);

		res.render('index', {
			markup: markup
		});
	},
	mainpage: function(req, res) {
		var response = req.query.team;
		var tweets = Tweet.getTweets(response, function (tweets) {
			var markup = ReactDOMServer.renderToString(<Interface team={response} tweets = {tweets} />);

			res.render('index', {
				markup: markup,
				state: JSON.stringify(tweets)
			});
		});
		
	}
} 