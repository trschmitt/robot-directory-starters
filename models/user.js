const mongo = require('mongodb');
const client = require("../dbConnections");

function findAll(callback) {
  let profiles = client.db.collection("profiles")
  profiles.find({}).toArray((err, data) => {
    callback(data);
  });
}

module.exports = {
  findAll: findAll
}
