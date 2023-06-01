const res = require("express/lib/response");
const { MongoClient, ObjectId} = require("mongodb");
const uri = "mongodb://127.0.0.1";
const client = new MongoClient(uri);

const connectToDatabase = async () => {
    try {
      await client.connect();

    } catch (e){
        console.error(e);
    }
}

//cambiar nombre y colleccion y ejecutar consultas igual 

const dbname = "sample_airbnb";
const collection_name = "trips";

const collection = client.db(dbname).collection(collection_name);
const allRegistros = async(client)=> {
    const db= client.db("sample_airbnb").collection("listingsAndReviews")
    let result= await db.find({"$or":[
     {"beds":2},
     { "beds":3},
     { "beds":4},
     { "beds":5}]}).count()
    console.log("Resultado", result);
};

const main = async () => {
    try {
      console.log("In")
      await connectToDatabase();
      await allRegistros(client);

    } catch (err) {
      console.error(`Error finding documents: ${err}`);
    } finally{
      client.close();
    }
  }
  main();
