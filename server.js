var express = require('express'),
	app = express(),
	dotenv = require('dotenv').config(),
	Twitter = require('twitter'),
	mongoose = require('mongoose'),
	babel = require('babel-register'),
	config = require('./config'),
	streamHandler = require('./streamHandler'),
	routes = require('./routes');

var server = require('http').Server(app);

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));
app.set('views', './views');
app.set('view engine', 'pug');

app.disable('etag');

var io = require('socket.io')(server);

app.get('/', routes.home);
app.get('/results', routes.mainpage);

// ---- Establishing connection with Twitter API 
var client = new Twitter(config.twitter);	
var query  = 'football, sports, sign player, transfer player, football transfer';
var stream = client.stream('statuses/filter', {track: query});
streamHandler(stream, io);

// ---- Connecting Mongoose to a local databse
mongoose.connect('mongodb://localhost/transfer-tweets');

server.listen(port, (req, res) => {
	console.log("App running on port " + port);
});

