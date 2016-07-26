var React = require('react'),
	Tweets = require('./Tweets.react');;

module.exports = React.createClass({
	render: function () {
		return (
			<div className="mdl-grid">
				<div className="mdl-grid mdl-cell--3-col">
					<center>
						<h2>{this.props.team}</h2>
						<a className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" href="/"> 
							Choose new team
						</a>
					</center>
				</div>

				<div className="mdl-grid mdl-cell--8-col">
					<Tweets tweets={this.props.tweets} />
				</div>


			</div>
		)
	}
});

