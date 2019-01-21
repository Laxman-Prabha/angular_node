var mongodb = require("./mongodb");
function insert(data, callback) {
    var db = mongodb.getDb();
    var coll = db.collection("msg");
    coll.insert(data, function (err, resp) {
        if (!err) {
            callback(null, resp)
        } else {
            callback(err, null);
        }
    });
}

module.exports.insert = insert;