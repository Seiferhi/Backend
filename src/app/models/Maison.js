var mongoose = require("mongoose");
const BienImmobilierSchema = require("./BienImmobilier");
const Schema = mongoose.Schema;
const MaisonSchema = BienImmobilierSchema.discriminator(
  "Maison",
  new Schema({
    nombreFacade: {
      type: Number,
      required: true
    },
    nombrePiece: {
      type: Number,
      required: true
    },
    nombreEtage: {
      type: Number,
      required: true
    },
    nombreSalleDeBain: {
      type: Number
    }
  })
);
module.exports = mongoose.model("Maison", MaisonSchema.scheme);
