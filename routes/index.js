var express = require("express");
var router = express.Router();

const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();
const uri = process.env.ATLAS_URI;
const client = new MongoClient(uri);

client.connect(function(err, client) {
  if (err) {
    console.log("Error occurred while connecting to MongoDB Atlas...\n", err);
  }

  console.log("Connected to mongo atlas...");
});

/**
 * GET Debt
 */

router.get("/debt/:roomname/:user/", function(req, res, next) {
  const db = client.db("roomies");
  const bills = db.collection("bills");

  bills
    .find({ roomname: req.params.roomname, user: req.params.user })
    .toArray((err, data) => {
      if (err) throw err;

      res.json(data);
    });
});

router.put("/debt/:roomname/:user/:name", function(req, res) {
  const db = client.db("roomies");
  const bills = db.collection("bills");
  var name = req.params.name;
  var user = req.params.user;

  bills.updateOne(
    { user: user },
    { $pull: { bills: { name: name } } },
    function(err, results) {}
  );

  res.json({ success: id });
});

/**
 * GET Messages
 */

router.get("/:roomname/messages", (req, res) => {
  const db = client.db("roomies");
  const messages = db.collection("messages");

  messages.find({ roomname: req.params.roomname }).toArray((err, data) => {
    if (err) throw err;

    res.json(data);
  });
});

/**
 * Post Message
 */

router.post("/message/:roomname", (req, res) => {
  const db = client.db("roomies");
  const messages = db.collection("messages");
  let _message = req.body;
  messages.insertOne(_message, (err, result) => {
    if (err) throw err;

    res.send("item agregado a la coleccion de mensajes.");
  });
});

module.exports = router;
