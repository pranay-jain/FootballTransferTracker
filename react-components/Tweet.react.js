var React = require('react');

module.exports = React.createClass({
	render: function() {
		var tweet = this.props.tweet;
		return (
			<li className="mdl-list__item mdl-list__item--three-line">
				<span className="mdl-list__item-primary-content">
			      <i className="material-icons mdl-list__item-avatar">
			      	<img src={tweet.avatar} />
			      </i>
			      <a href={"http://www.twitter.com/" + tweet.screenname}><span>{tweet.name}</span></a>
			      <cite>{tweet.screenname}</cite>
			      <span className="mdl-list__item-text-body">
			        {tweet.text}
			      </span>
			    </span>
			</li>
		)
	}
});