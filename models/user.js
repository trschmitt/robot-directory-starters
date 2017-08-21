const mongo = require("mongodb");
const client = require("../dbConnections");

///////mongo code
function findAll(callback) {
  let profiles = client.db.collection("profiles");
  profiles.find({}).toArray((err, data) => {
    callback(data);
  });
}

function findById(id, callback) {
  let profiles = client.db.collection("profiles");
  profiles.findOne({ id: id }, (err, data) => {
    callback(data);
  });
}

//////edit these properly//////
function findAllEmployed(callback) {
  let profiles = client.db.collection("profiles");
  profiles.find(
    { job: { $ne: null } }.toArray((err, data) => {
      callback(data);
    })
  );
}

function finAllUnemployed(callback) {
  let profiles = client.db.collection("profiles");
  profiles.find(
    { job: null }.toArray((err, data) => {
      callback(data);
    })
  );
}
/////////////////////////
///////end of mongo code/////////

module.exports = {
  findAll: findAll,
  findById: findById
};
