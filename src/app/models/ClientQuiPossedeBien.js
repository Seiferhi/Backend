var mongoose = require("mongoose");
const Client = require("./Client");
const Schema = mongoose.Schema;

const ClientQuiPossedeBienSchema = Client.discriminator(
  "ClientQuiPossedeBien",
  new Schema({})
);
module.exports = ClientQuiPossedeBienSchema;
