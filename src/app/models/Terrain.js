var mongoose = require("mongoose");
const BienImmobilierSchema = require("./BienImmobilier");
const Schema = mongoose.Schema;
const TerrainSchema = BienImmobilierSchema.discriminator(
  "Terrain",
  new Schema({})
);

module.exports=mongoose.model("Terrain",TerrainSchema.scheme)
