const BienImmobilier = require("../models/BienImmobilier");
const express = require("express");
const router = express.Router();
const multer = require("multer");
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, __dirname + "/uploads/images");
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
});

var upload = multer({ storage: storage });
router.post("/add", upload.array("image", 15), function(req, res) {
  var fileinfo = req.files;
  var title = req.body.title;
  // console.log(title);
  console.log(fileinfo);

  var bienImmobilier = new BienImmobilier({
    idUser: req.body.idUser,
    titre: req.body.titre,
    region: req.body.region,
    surface: req.body.surface,
    prix: req.body.prix,
    nombreEtage: req.body.nombreEtage,
    nombrePiece: req.body.nombrePiece,
    nombreFacade: req.body.nombreFacade,
    nombreSalleDeBain: req.body.nombreSalleDeBain,
    statut: req.body.statut,
    description: req.body.description,
    ALaUne: req.body.ALaUne,
    ValableAPartirDe: req.body.ValableAPartirDe,
    etat: req.body.etat,
    categories: req.body.categories,
    options: req.body.options,
    image: fileinfo
  });

  bienImmobilier
    .save()
    .then(bienImmobilier => {
      res.send(bienImmobilier);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/all", function(req, res) {
  BienImmobilier.find({})
    .then(bienImmobilier => {
      res.send(bienImmobilier);
    })
    .catch(err => {
      res.json(err);
    });
});

router.delete("/remove/:id", function(req, res) {
  console.log("hello id");
  console.log(req.params.id);
  BienImmobilier.deleteOne({ _id: req.params.id }, function(err) {
    if (err) {
      res.send({ state: "not ok", msg: "err" + err });
    } else {
      res.send({ state: "ok", msg: "supp" });
    }
  });
});

// prolongation
router.put("/update/:id", function(req, res) {
  BienImmobilier.updateOne({ _id: req.params.id }, req.body, function(err) {
    if (err) {
      res.send({ state: "not ok", msg: "err updated" + err });
    } else {
      res.send({ state: "ok", msg: "updated ok" });
    }
  });
});

module.exports = router;
