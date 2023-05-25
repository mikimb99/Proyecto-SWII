var express = require('express');
var router = express.Router();
const dbo = require('../db/connect');
const {ObjectID, ObjectId} = require("mongodb");

/* GET all especies. */
router.get('/', async function(req, res, next) {
    console.log("/allEspecies")
    const connection = dbo.getDb();
    let result = await connection.collection('especies').find({}).limit(5).toArray()
    res.json(result).status(200);

});

/* GET ESPECIES BY ID */
router.get('/:id', async (req, res) => {
  console.log("/getEspecieById")
  console.log(req.params.id)
  const dbConnect = dbo.getDb();
  let query = {_id: parseInt(req.params.id)};
  let result = await dbConnect
    .collection('especies')
    .findOne(query);
  if (!result){
    res.send("Not found").status(404);
  } else {
    res.status(200).json(result);
  }
});

//addAnimal()
router.post('/', async (req, res) => {
  const dbConnect = dbo.getDb();
  const animal={
    "id":req.body._id,
    "tipo": req.body.tipo,
    "descripcion": req.body.descripcion,
  }
  console.log(especie);
  let result = await dbConnect
    .collection('especies')
    .insertOne(especie);
  res.status(201).send(result);
});

//updateEspecieById()
router.put('/:id', async (req, res) => {
  const query = {_id: parseInt(req.params.id)};
  const update = {$set:{
    "id": req.body.nombre,
    "tipo": req.body.tipo,
    "descripcion": req.body.descripcion,
  }};
  const dbConnect = dbo.getDb();
  let result = await dbConnect
    .collection('especies')
    .updateOne(query, update);
  res.status(200).send(result);
});

//deleteEspecieById()
router.delete('/:id', async (req, res) => {
  const query = {_id: parseInt(req.params.id)};
  const dbConnect = dbo.getDb();
  let result = await dbConnect
    .collection('especies')
    .deleteOne(query);
  res.status(200).send(result);
});

module.exports = router;