var React = require('react');

module.exports = React.createClass({
	render: function () {
		return (
			<div className="mdl-grid">
				<div className="mdl-grid mdl-cell--3-col">
					<h2> {this.props.team} </h2>
				</div>
				<div className="mdl-grid mdl-cell--8-col">
					<h2> {this.props.team} </h2>
				</div>
			</div>
		)
	}
});

