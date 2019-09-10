var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
const uri = process.env.ATLAS_URI;
const client = new MongoClient(uri);

//Connection to MongoDB Atlas.
const getMovies = (resolve) => {
  client
    .connect(function (err, client) {
      if (err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n', err);
      }

      console.log('Connected to mongo atlas...');

      const db = client.db('sample_mflix');
      const movies = db.collection('movies');

      movies.find({})
        .limit(20)
        .toArray((err, data) => {
          if (err) throw err;

          resolve(data);
          client.close();
        })
    });
};

/* GET home page. */
router.get('/data', function (req, res, next) {
  getMovies((data) => {
    res.json(data);
  })
});

module.exports = router;
