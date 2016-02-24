var cool = require("cool-ascii-faces");
var express = require("express");

var app = express();

app.get("/", function (req,res){
	console.log("New request arrived!");
	res.send(cool());

});

app.listen(5000);