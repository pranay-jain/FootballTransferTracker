var React = require('react'),
	Header = require('./header.react'),
	Layout = require('./layout.react')

module.exports = React.createClass({
	render: function () {
		return (
			<div className="content">
				<Header />
				<Layout team={this.props.team}/>
			</div>
		)
	}
});

