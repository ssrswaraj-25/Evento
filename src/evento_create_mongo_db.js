const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, client) {
  if (err) throw err;
  console.log("Database connected!");

  // Create/select your database (if needed)
  const db = client.db('mydb');

  
  // Close the client connection
  client.close();
});



