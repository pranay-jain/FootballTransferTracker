var React = require('react');

module.exports = React.createClass({
	render: function () {
		return (
			<center>
				<div className="intro-card mdl-card">
					<div className="mdl-card__title">
				  		<h4>Welcome to Football Transfer Tracker</h4>
					</div>
					<div className="mdl-card__supporting">
	    				This is an app to find the latest tweets posted across Twitter to find the transfer news for your favourite football team.
	    				Enter your favourite team to follow.
	    			</div>
	    			<div className="mdl-form">
	    				<form action="/results" method="get">
						  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
						    <input className="mdl-textfield__input" type="text" id="sample3"  name="team" />
						    <label className="mdl-textfield__label" htmlFor="sample3"> Your favourite team </label>
						  </div>
						</form>
	    			</div>

				</div>
			</center>
		)
	}
});
