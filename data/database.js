const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

async function connectToDatabase() {
  const client = await MongoClient.connect('mongodb://localhost:27017');
  database = client.db('nexcart');
}


// async function connectToDatabase() {
//   const uri = 'mongodb://localhost:27017';

//   console.log('MongoDB URI:', JSON.stringify(uri));

//   const client = await MongoClient.connect(uri);

//   console.log('MongoDB connected successfully');

//   database = client.db('nexcart');
// }

//.....








function getDb() {
    if (!database) {
        throw new Error('Database not connected');
    }
    return database;
}

module.exports = {
    connectToDatabase: connectToDatabase,
    getDb: getDb
};