var express = require('express');
var router = express.Router();
const dbo = require('../db/connect');
const {ObjectID, ObjectId} = require("mongodb");

/* GET all animales. */
router.get('/', async function(req, res, next) {
    console.log("/allAnimales")
    const connection = dbo.getDb();
    let result = await connection.collection('animales').find({}).limit(5)
      .toArray()
    res.json(result).status(200);
      
});

module.exports = router;