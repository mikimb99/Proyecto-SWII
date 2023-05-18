var express = require('express');
var router = express.Router();
const dbo = require('../db/connect');
const {ObjectID, ObjectId} = require("mongodb");

/* GET all animales. */
router.get('/', async function(req, res, next) {
    console.log("/allAnimales")
    const connection = dbo.getDb();
    let result = await connection.collection('animales').find({}).limit(5).toArray()
    res.json(result).status(200);
      
});

/* GET ANIMALES BY ID */
router.get('/:id', async (req, res) => {
  console.log("/getAnById")
  console.log(req.params.id)
  const dbConnect = dbo.getDb();
  let query = {_id: parseInt(req.params.id)};
  let result = await dbConnect
    .collection('animales')
    .findOne(query);
  if (!result){
    res.send("Not found").status(404);
  } else {
    res.status(200).json(result);
  }
});

//addPelicula()
router.post('/', async (req, res) => {
  const dbConnect = dbo.getDb();
  console.log(req.body);
  const animal={
    "_id":req.body._id,
    "title": req.body.title,
    "altura_media": req.body.altura_media,
    "peso": req.body.peso,
    "habitat": req.body.habitat
  }
  let result = await dbConnect
    .collection('animales')
    .insertOne(animal);
  res.status(201).send(result);
});

module.exports = router;