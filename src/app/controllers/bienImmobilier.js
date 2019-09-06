const BienImmobilier = require("../models/BienImmobilier");
const express = require("express");
const router = express.Router();
const multer = require("multer");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
const upload = multer({ storage });

router.post("/add", upload.single("image"), (req, res) => {
  if (req.file)
    res.json({
      imageUrl: `images/uploads/${req.file.filename}`
    });
  else res.status("409").json("No Files to Upload.");
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
    imageUrl: req.body.imageUrl
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
