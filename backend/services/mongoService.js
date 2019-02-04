
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://mine:mine123@ds113923.mlab.com:13923/minenight';
const dbName = 'minenight';

var dbConnection = null
function connectToDb () {
    if (dbConnection) return Promise.resolve(dbConnection);
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, client) {
            if (err) return reject('cannot connect to database')

            dbConnection = client.db(dbName);
            resolve(dbConnection)
        });
    })
}

module.exports = {
    connectToDb
}