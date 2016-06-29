var express = require('express');
var app = express();
var http = require('http');
var httpServer = http.Server(app);


function getName() {
	return "Philadelphia, PA";
}

app.set('views',__dirname + "/views");
app.set('view engine', 'jade');
app.use(express.static(__dirname));

app.get('/', function(req, res){
	res.render('index.html');
});
app.listen(process.env.port || 8080);