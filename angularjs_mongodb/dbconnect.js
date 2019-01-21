// var express = require("express");
// var app = express();
// var path = require('path');
// var port = 3080;
// var bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// var mongoose = require("mongoose");
// mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://localhost:27017/message");
// var nameSchema = new mongoose.Schema({
//     name: String,
//     msg: String
// });
// var User = mongoose.model("Msg", nameSchema);


// app.use(express.static(path.join(__dirname, 'public')));
// app.post("/add", (req, res) => {
//     var myData = new User(req.body);
//     myData.save()
//         .then(item => {
//             res.send("Saved to database");
//         })
//         .catch(err => {
//             res.status(400).send("Unable to save to database");
//         });
// });

// app.listen(port, () => {
//     console.log("Server listening on port " + port);
// });