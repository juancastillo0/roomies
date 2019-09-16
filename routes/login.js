var express = require("express");
var router = express.Router();

const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();
const uri = process.env.ATLAS_URI;
const client = new MongoClient(uri);

client.connect(function(err, client) {
  if (err) {
    console.log("Error occurred while connecting to MongoDB Atlas...\n", err);
  } else {
    console.log("Connected to mongo atlas...");
  }
});

router.get("/:roomname/:username/", function(req, res, next) {
  const db = client.db("roomies");
  const bills = db.collection("users");

  bills
    .find({ roomname: req.params.roomname, username: req.params.username })
    .toArray((err, data) => {
      if (err) throw err;

      res.json(data);
    });
});

module.exports = router;
