var mongoose = require("mongoose");

const UserSchema = require("./UserSchema");
const Schema = mongoose.Schema;

const ChefAgenceSchema = UserSchema.discriminator(
  "ChefAgence",

  new Schema({})
);
module.exports = mongoose.model("ChefAgence");
