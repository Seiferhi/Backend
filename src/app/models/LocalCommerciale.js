var mongoose = require("mongoose");
const BienImmobilierSchema = require("./BienImmobilier");
const Schema = mongoose.Schema;
const LocalCommercialeSchema = BienImmobilierSchema.discriminator(
  "LocalCommerciale",
  new Schema({
    nombreEtage: {
      type: Number,
      required: true
    }
  })
);
module.exports=mongoose.model("LocalCommerciale",LocalCommercialeSchema.scheme)
