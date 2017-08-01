const mongo = require('mongodb');

let client = {
  db: null,
  connect: connect
}

function conect(callback) {
  let mongoClient = mongo.MongoClient;
  let baseUrl = "mongodb://localhost:27017//robots";

  mongoClient.connect(url, (err, db) => {
    if (err) {
      throw err;
      exit(1);
    }

    console.log(`Connected MongoDB @ ${baseUrl}`);
    client.db = db;
    callback(client);
  })
}

module.exports = client;
