const express = require('express'),
	app = express();

var port = process.env.PORT || 3000;

const server = app.listen(port, (req, res) => {
	console.log("App running on port " + port);
});