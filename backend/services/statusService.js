'use strict'
const mongoService = require('./mongoService');
const ObjectId = require('mongodb').ObjectId;

function getStatus(){
    return mongoService.connectToDb()
        .then(dbConn => {
            const statusCollection = dbConn.collection('status');
            return statusCollection.find().toArray()
        })
}

function addStatus({status}){
    // console.log(status)

    status.name = 'popo'
    status.time = Date.now()
    status.likes = [ 'userId' ]
    status.comments = [ { id: 'userId', comment: 'hi' } ]

    return mongoService.connectToDb()
        .then(dbConn => {
            const statusCollection = dbConn.collection('status');
            return statusCollection.insert(status)
        })
}
module.exports = {
    getStatus,
    addStatus
}