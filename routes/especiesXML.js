var express = require('express');
var router = express.Router();
const dbo = require('../db/connect');
const {ObjectID} = require("mongodb");
var xml = require('xml');
var js2xmlparser = require("js2xmlparser");

/* GET all lugares. */
router.get('/', async function(req, res, next) {
    const connection = dbo.getDb();
    let result = await connection.collection('especies').find({}).toArray()
    if (!result){
          res.status(404).send('Error al buscar especies');
    } else {
            var js2xml = js2xmlparser.parse("especies", result);
            res.send(js2xml.toString()).status(200);
        }
      });


/* GET lugar by ID. */
router.get('/:id', async function(req, res, next) {
    const connection = dbo.getDb();
   let result= await connection.collection('especies').findOne({_id: parseInt(req.params.id)})
        if (!result){
                res.status(404).send('Error al acceder a la especie');
        } else {
            var js2xml = js2xmlparser.parse("especie", result);
            res.send(js2xml.toString()).status(200);
            }
    });



module.exports = router;