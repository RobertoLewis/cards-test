var express = require ('express');
var router = require('./router');
var path = require('path');
var app = express();

app.use(express.static('client'));
router(app);

app.listen(3000, function(){
	console.log("3000 is running, LET'S DO THIS");
});

	