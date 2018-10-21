// ------------------------------------------------------------------------
// SERVER.JS
// ------------------------------------------------------------------------

// REQUIRE
// ------------------------------------------------------------------------
var express 		= require("express");
var path            = require('path');
var bodyParser 		= require('body-parser');
var appDir          = path.dirname(require.main.filename);


// APP
// ------------------------------------------------------------------------
var app = express();


// FOLDER SHARE
// ------------------------------------------------------------------------
app.use(express.static(__dirname + ''));
app.use(express.static(__dirname + '/assets'));


// MIDDLEWARE
// ------------------------------------------------------------------------
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// ROUTES
// ------------------------------------------------------------------------

// INDEX
app.get('/', function(req, res) {
    res.sendFile('index.html');
});

// 404
app.get('*', function(req, res){
    res.sendFile('index.html');
});


// START
// ------------------------------------------------------------------------
var port = process.env.PORT || 8080;
//var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log("Serving on " + port);
});
