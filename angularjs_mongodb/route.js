var express = require("express");
var router = express.Router();
var service = require('./service');
router.p
ost('/add', function (req, res) {
    var data = req.body;
    service.insertData(data,function(err,resp){
        if(!err){
            res.send(resp);
        }
        else{
            res.send(500);
        }
    })
 });

module.exports = router;