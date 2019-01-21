var dao = require('./dao');
function insertData(data, callback) {
    dao.insert(data, callback);
}
module.exports.insertData = insertData;