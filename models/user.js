const mongo = require('mongodb');
const client = require("./dbConnections");

function findByUserID(id) {
  return users.find((el) => {
    return el.id == id;
  })
}

module.exports = {
  "all": users,
  "findByUserID": findByUserID
}
