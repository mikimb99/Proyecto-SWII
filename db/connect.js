const { MongoClient} = require("mongodb");
//const uri = "mongodb://127.0.0.1";
const connectionString = process.env.MONGODB_URI;
console.log(connectionString);
const client = new MongoClient(connectionString);
let dbConnection;

module.exports={
    connectToDatabase : async () => {
        try {
            await client.connect();
            dbConnection = client.db();
            console.log("Succesfully connected to database");
            process.exit();
        } catch (e){
            console.error(e);
        }
    },

    getDb: function () {
        return dbConnection;
      }

}


/*
const listDatabases = async (client) => {
    databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}
const main = async () => {
    try {
        await connectToDatabase();
        await listDatabases(client);
    } catch (e){
        console.error(e);
    } finally {
        client.close();
    }
}
*/

