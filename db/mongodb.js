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
const dbname = "animales";
const collection_name = "animales";
const collection = client.db(dbname).collection(collection_name);

const allRegistros = async(client)=> {
  let result= await collection.find({}).toArray(function(err, res) {
    if (err) throw err;
    client.close();
  }); 
  console.log(result);
}


const main = async () => {

    try {
      console.log("In")
      await connectToDatabase();
      await allRegistros(client);
      
    } catch (err) {
      console.error(`Error finding documents: ${err}`);
    } 
  }
  main();