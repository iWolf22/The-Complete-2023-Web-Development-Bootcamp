import { default as mongodb } from 'mongodb';
let MongoClient = mongodb.MongoClient;
import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

var uri;
var client;
var dbName;
var collectionName;
var database;
var collection;
var data;

app.get("/", async (req, res) => {

  await mongoDBStartup();
  

  const findQuery = { type: "message" };

  try {
    var messageList = []
    const cursor = await collection.find(findQuery);
    await cursor.forEach(messages => {
      messageList.push(messages);
    });
    // add a linebreak
    console.log();
  } catch (err) {
    console.error(`Something went wrong trying to find the documents: ${err}\n`);
  }

  // Make sure to call close() on your client to perform cleanup operations
  await client.close();

  data = {
    messageList: messageList
  }
  res.render("index.ejs", data);

});

app.post("/sendMessage", async (req, res) => {

  await mongoDBStartup();

  var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/') + " " + new Date().toJSON().slice(11,16);

  const messageLogs = [
    {
      type: "message",
      message: req.body["message"],
      timeStamp: utc,
      author: "Anonymous Person",
      id: JSON.stringify(Math.floor(Math.random() * 1000000000000))
    }
  ];

  try {
    const insertManyResult = await collection.insertMany(messageLogs);
    console.log(`${insertManyResult.insertedCount} documents successfully inserted.\n`);
  } catch (err) {
    console.error(`Something went wrong trying to insert the new documents: ${err}\n`);
  }

  const findQuery = { type: "message" };

  try {
    var messageList = []
    const cursor = await collection.find(findQuery);
    await cursor.forEach(messages => {
      messageList.push(messages);
    });
    // add a linebreak
    console.log();
  } catch (err) {
    console.error(`Something went wrong trying to find the documents: ${err}\n`);
  }

  // Make sure to call close() on your client to perform cleanup operations
  await client.close();
  
  data = {
    messageList: messageList
  }
  res.render("index.ejs", data)
});

app.post("/deleteMessage", async (req, res) => {

  await mongoDBStartup();

  const deleteQuery = { id: req.body["message"] };
  console.log(req.body["message"]);
  try {
    const deleteResult = await collection.deleteOne(deleteQuery);
    console.log(`Deleted ${deleteResult.deletedCount} documents\n`);
  } catch (err) {
    console.error(`Something went wrong trying to delete documents: ${err}\n`);
  }

  const findQuery = { type: "message" };

  try {
    var messageList = []
    const cursor = await collection.find(findQuery);
    await cursor.forEach(messages => {
      messageList.push(messages);
    });
    // add a linebreak
    console.log();
  } catch (err) {
    console.error(`Something went wrong trying to find the documents: ${err}\n`);
  }

  // Make sure to call close() on your client to perform cleanup operations
  await client.close();
  
  data = {
    messageList: messageList
  }
  res.render("index.ejs", data)
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

async function mongoDBStartup() {
  // TODO:
  // Replace the placeholder connection string below with your
  // Altas cluster specifics. Be sure it includes
  // a valid username and password! Note that in a production environment,
  // you do not want to store your password in plain-text here.
  const uri = process.env.MONGO_DB_URI;


  // The MongoClient is the object that references the connection to our
  // datastore (Atlas, for example)
  client = new MongoClient(uri);

  // The connect() method does not attempt a connection; instead it instructs
  // the driver to connect using the settings provided when a connection
  // is required.
  await client.connect();

  // Provide the name of the database and collection you want to use.
  // If the database and/or collection do not exist, the driver and Atlas
  // will create them automatically when you first write data.
  dbName = "MongoDB-Open-Chat";
  collectionName = "Open-Chat";

  // Create references to the database and collection in order to run
  // operations on them.
  database = client.db(dbName);
  collection = database.collection(collectionName);
}