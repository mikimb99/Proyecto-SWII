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
/* FILTRADO POR HABITAT */
router.get('/search', async function(req, res, next) {
  const connection = dbo.getDb();
  const habitat = req.query.habitat; // Obtener el hábitat de los parámetros de consulta

  // Realizar la consulta a la base de datos con el filtro de hábitat
  let result = await connection.collection('animales').find({ habitat: habitat }).toArray();

  res.json(result).status(200);
});

/*PAGINACION */
router.get('/pagina', async function(req, res, next) {
  const page = parseInt(req.query.page) || 1; // Página solicitada
  const pageSize = parseInt(req.query.pageSize) || 10; // Tamaño de página (número de resultados por página)

  const connection = dbo.getDb();
  const totalCount = await connection.collection('animales').countDocuments();

  const skip = (page - 1) * pageSize; // Número de resultados a omitir
  const limit = pageSize; // Número máximo de resultados a devolver

  let result = await connection.collection('animales')
    .find({})
    .skip(skip)
    .limit(pageSize)
    .toArray();

  const response = {
    page: page,
    pageSize: pageSize,
    totalCount: totalCount,
    totalPages: Math.ceil(totalCount / pageSize),
    results: result
  };

  res.json(response).status(200);
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

/* FILTRADO DE PESO POR MAYOR QUE*/
router.get('/filter-peso/:valor', async (req, res) => {
  const dbConnect = dbo.getDb();
  const query = { peso: { $gt: parseInt(req.params.valor) } }; // Filtrar por peso mayor a un valor específico
  const result = await dbConnect.collection('animales').find(query).toArray();
  res.status(200).json(result);
});

//addAnimal()
router.post('/', async (req, res) => {
  const dbConnect = dbo.getDb();
  const animal={
    "_id":req.body._id,
    "title": req.body.title,
    "altura_media": req.body.altura_media,
    "peso": req.body.peso,
    "habitat": req.body.habitat
  }
  
  console.log(animal);
  let result = await dbConnect
    .collection('animales')
    .insertOne(animal);
  res.status(201).send(result);
});

//updateAnimalById()
router.put('/:id', async (req, res) => {
  const query = {_id: parseInt(req.params.id)};
  const update = {$set:{
    "title": req.body.title,
    "altura_media": req.body.altura_media,
    "peso": req.body.peso,
    "habitat": req.body.habitat
  }};
  const dbConnect = dbo.getDb();
  let result = await dbConnect
    .collection('animales')
    .updateOne(query, update);
  res.status(200).send(result);
});

//deleteAnimalById()
router.delete('/:id', async (req, res) => {
  const query = {_id: parseInt(req.params.id)};
  const dbConnect = dbo.getDb();
  let result = await dbConnect
    .collection('animales')
    .deleteOne(query);
  res.status(200).send(result);
});

module.exports = router;