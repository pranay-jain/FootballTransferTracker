var express = require('express'),
	app = express(),
	dotenv = require('dotenv').config(),
	Twitter = require('twitter'),
	mongoose = require('mongoose'),
	config = require('./config'),
	streamHandler = require('./streamHandler');

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.render('index');
});

// ---- Establishing connection with Twitter API 
var client = new Twitter(config.twitter);	
var query  = 'euro cup';
var stream = client.stream('statuses/filter', {track: query});
streamHandler(stream);

// ---- Connecting Mongoose to a local databse
mongoose.connect('mongodb://localhost/transfer-tweets');

const server = app.listen(port, (req, res) => {
	console.log("App running on port " + port);
	console.log(process.env.consumer_key);
});