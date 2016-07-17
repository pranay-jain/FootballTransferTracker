var React = require('react'),
	Tweet = require('./Tweet.react');

module.exports = React.createClass({
	render: function() {
		var content = this.props.tweets.map(function(tweet){
	      return (
	        <Tweet key={tweet._id} tweet={tweet} />
	      )
	    });

		return(
			<ul className="tweets-list mdl-list">{content}</ul>
		)

	}
});