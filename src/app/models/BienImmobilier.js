const mongoose = require("mongoose");
const imagesUpload = require("images-upload-middleware");
const Schema = mongoose.Schema;

//create Schema

const BienImmobilierSchema = mongoose.model(
  "BienImmobilier",
  new Schema({
    idUser: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    titre: {
      type: String
      // required: true
    },

    region: {
      type: String
      // required: true
    },
    surface: {
      type: Number
      // required: true
    },
    prix: {
      type: Number
      // required: true
    },
    nombreEtage: {
      type: Number
      // required: true
    },
    nombrePiece: {
      type: Number

      // required: true
    },
    nombreFacade: {
      type: Number
      // required: true
    },
    nombreSalleDeBain: {
      type: Number
    },

    statut: {
      type: String
      // required: true,
      // value: ["A louer", "A Vendre"]
    },
    description: {
      type: String
    },
    aLaUne: {
      type: Boolean,
      default: false
    },
    ValableAPartirDe: {
      type: Date
    },
    etat: {
      type: String,
      value: ["confirme", "en attente", "non confirme"]
    },
    categories: {
      type: String,
      value: [
        "Appartement",
        "Bureau",
        "LocalCommerciale",
        "Maison",
        "Terrain",
        "Residence",
        "Villa"
      ]
      // required: true
    },
    options: {
      type: Array

      // required: true
    },
    image: { type: Object }
  })
);
module.exports = mongoose.model("BienImmobilier");
