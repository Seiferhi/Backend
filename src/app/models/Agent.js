var mongoose = require("mongoose");
const UserSchema = require("./UserSchema");
const Schema = mongoose.Schema;

const AgentSchema = UserSchema.discriminator(
  "Agent",
  new Schema({
    BienImmobilier: [{ type: mongoose.Schema.ObjectId, ref: "BienImmobilier" }]
  })
);
module.exports = AgentSchema;
