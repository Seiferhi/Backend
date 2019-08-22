var express = require("express");
var router = express.Router();
var Role = require("../models/Role");

router.post("/add", function(req, res) {
  role = new Role({
    nom: req.body.nom
  });

  role.save(function(err) {
    if (err) {
      res.send({ state: "not ok", msg: "err:" + err });
      console.log("err");
    } else {
      res.send({ state: "ok", msg: "ajout" });
      console.log(" ajouté avec succé ");
    }
  });
});

router.get("/roleUser", function(req, res) {
  Role.findOne({ nom: req.body.nom }, function(err, user) {
    if (err) throw err;
    if (!user) {
      res.json({ success: false, message: "no user was found " });
    } else {
      res.json({ success: true, nom: req.body.nom });
    }
  });
});

router.get("/all", function(req, res) {
  Role.find({}, function(err, result) {
    res.send(result);
  });
});

router.get("/byid/:id", function(req, res) {
  Role.findById({ _id: req.params.id }, function(err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

module.exports = router;
