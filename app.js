var React = require('react'),
	ReactDOM = require('react-dom');

var TweetsApp = require('./react-components/interface.react');

var initialTweets = JSON.parse(document.getElementById('initialTweets'));

ReactDOM.render(
	<TweetsApp tweets={initialTweets} />,
	document.getElementById('content')
);