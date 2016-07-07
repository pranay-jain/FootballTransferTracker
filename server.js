const express = require('express'),
	app = express();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.render('index');
});	

const server = app.listen(port, (req, res) => {
	console.log("App running on port " + port);
});