var React = require('react'),
	ReactDOM = require('react-dom');

var Interface = require('./react-components/interface.react');

var initialTweets = JSON.parse(document.getElementById('initialTweets').innerHTML);

ReactDOM.render(
	<Interface tweets={initialTweets} />,
	document.getElementById('content')
);