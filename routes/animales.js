var express = require('express');
var router = express.Router();
const dbo = require('../db/connect');
const {ObjectID, ObjectId} = require("mongodb");

/* GET all animales. */
router.get('/', function(req, res, next) {
    const connection = dbo.getDb();
    connection.collection('animales').find({}).limit(5)
      .toArray(function (err, result){
        if (err){
          res.status(400).send('Error al buscar animales');
        } else {
          res.json(result);
        }
      });
});

module.exports = router;