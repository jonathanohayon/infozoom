const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://jonathanohayon1:robert26@cluster0-yka0j.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});