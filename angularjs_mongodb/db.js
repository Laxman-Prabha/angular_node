var express = require("express");
var path = require('path');
var app = express();
var port = 3080;
var bodyParser= require("body-parser");
var route = require('./route');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.listen(port, () => {
    console.log("Server listening on port " + port);
});
app.use(express.static(path.join(__dirname, 'public')));
app.use('/route',route);

