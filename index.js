var express = require('express');
var app = express();
var http = require('http');
var httpServer = http.Server(app);



app.use(express.static(__dirname));

app.get('/', function(req, res){
	res.render('index');
});

app.get('/cs', function(req, res){
	res.sendfile('customerService.html');
});

app.get('/ll', function(req, res){
	res.sendfile('latlong.html');
});

app.get('/tk', function(req, res){
	res.sendfile('trucking.html');
});

app.listen(process.env.port || 8080);