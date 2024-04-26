const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    const database = client.db('MongoDBTest');
    const test = database.collection('test');
    // Query for a movie that has the title 'Back to the Future'
    const result = await test.insertOne({id_: 1, test: true});
    console.log(result);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


// Old Code

/*

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'fruitsDB';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    client.close();
});

*/