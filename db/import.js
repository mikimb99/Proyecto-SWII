const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1";
const client = new MongoClient(uri);

const connectToDatabase = async () => {
  try {
    await client.connect();
  } catch (e) {
    console.error(e);
  }
};
const checkIfDataExists = async () => {
  const dbname = "Animales;
  const collectionName = "animales";
  const db = client.db(dbname);
  const collection = db.collection(collectionName);
  const count = await collection.countDocuments({});
  if (count > 0) {
    throw new Error("Los datos ya han sido insertados.");
  }
};
const insertData = async (data) => {
  const dbname = "Animales";
  const collectionName = "animales";
  const db = client.db(dbname);
  const collection = db.collection(collectionName);
  try {
    await collection.insertMany(data);
    console.log("Datos insertados correctamente.");
  } catch (e) {
    console.error(e);
  }
};

const main = async () => {
  try {
    await connectToDatabase();
    const data = require("./animales.js");
    await insertData(data);
  } catch (e) {
    console.error(e);
  } finally {
    client.close();
  }
};

main();
