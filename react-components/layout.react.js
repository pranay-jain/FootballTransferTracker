var React = require('react'),
	Tweets = require('./Tweets.react');;

module.exports = React.createClass({
	render: function () {
		return (
			<div className="mdl-grid">
				<div className="mdl-grid mdl-cell--3-col">
					<h2> {this.props.team} </h2>
				</div>
				<div className="mdl-grid mdl-cell--8-col">
					<Tweets tweets = {this.props.tweets} />
				</div>
			</div>
		)
	}
});

