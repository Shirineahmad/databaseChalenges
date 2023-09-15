const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.get("/api", (req, res) => {
  res.send("we get response");
});
app.listen(port, () => {
  console.log("hi");
});
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://shirinDatabase:pqxkQl3GBTUFoBtb@cluster0.tkwzofa.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  



    const collection = client.db("song").collection("song2");

    const documents = {
      name: 'value1', age: 24 ,
     name: 'value3', age: 22 ,
    // Add more documents as needed
  };

    const result = await collection.insertOne(documents)
    if (result.acknowledged) {
      console.log("inserted");
    } else {
      console.log("failed");
    }
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}run().catch(console.dir);

