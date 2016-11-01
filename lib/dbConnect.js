const MongoClient = require('mongodb');

// process.env.MONGOLAB_URI is DEPRECATED
// process.env.MONGODB_URI is needed for when we deploy to Heroku
// process.env.MONGOLAB_GREEN_URI ||
const connectionURL = process.env.MONGOLAB_GREEN_URI || 'mongodb://localhost:27017/iconCRUD';

function getDB() {
  return MongoClient.connect(connectionURL);
}

module.exports = {
  getDB
};
