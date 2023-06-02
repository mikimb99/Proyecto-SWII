var express = require('express');
var router = express.Router();
const dbo = require('../db/connect');
const {ObjectID, ObjectId} = require("mongodb");

/* GET all lugares. */
router.get('/', async function(req, res, next) {
    console.log("/allLugares")
    const connection = dbo.getDb();
    let result = await connection.collection('lugares').find({}).toArray()
    res.json(result).status(200);

});

/* GET LUGARES BY ID */
router.get('/:id', async (req, res) => {
  console.log("/getLugarById")
  console.log(req.params.id)
  const dbConnect = dbo.getDb();
  let query = {_id: parseInt(req.params.id)};
  let result = await dbConnect
    .collection('lugares')
    .findOne(query);
  if (!result){
    res.send("Not found").status(404);
  } else {
    res.status(200).json(result);
  }
});

//addLugar()
router.post('/', async (req, res) => {
  const dbConnect = dbo.getDb();
  const lugar={
    "_id": req.body._id,
    "nombre": req.body.nombre,
    "ubicacion": req.body.ubicacion,
    "animales": req.body.animales,
    "clima": req.body.clima,
    "superficie": req.body.superficie,
    "visitantes_anuales": req.body.visitantes_anuales
  }
  console.log(lugar);
  let result = await dbConnect
    .collection('lugares')
    .insertOne(lugar);
  res.status(201).send("Creado correctamente");
});

//updateLugarbyId()
router.put('/:id', async (req, res) => {
  const query = {_id: parseInt(req.params.id)};
  const update = {$set:{
    "nombre": req.body.nombre,
    "ubicacion": req.body.ubicacion,
    "animales": req.body.animales,
    "clima": req.body.clima,
    "superficie": req.body.superficie,
    "visitantes_anuales": req.body.visitantes_anuales
  }};
  const dbConnect = dbo.getDb();
  let result = await dbConnect
    .collection('lugares')
    .updateOne(query, update);
  res.status(200).send("Cambiado correctamente");
});

//deleteLugarbyID()
router.delete('/:id', async (req, res) => {
  const query = {_id: parseInt(req.params.id)};
  const dbConnect = dbo.getDb();
  let result = await dbConnect
    .collection('lugares')
    .deleteOne(query);
  res.status(200).send("Borrado correctamente");
});


module.exports = router;