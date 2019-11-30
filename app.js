require('dotenv').config()

const express = require('express'),
	  mongoose = require('mongoose'),
	  bodyParser = require('body-parser'),
	  app = express();


let todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
	res.send("Hi The from the root route!")
});


app.use('/api/todos', todoRoutes);


var port = process.env.PORT || 3000;
	app.listen(port, function () {
  	console.log("Server Has Started!");
});