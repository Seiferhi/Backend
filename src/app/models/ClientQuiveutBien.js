var mongoose = require("mongoose");
const Client = require("./Client");
const Schema = mongoose.Schema;

const ClientQuiVeutBienSchema = Client.discriminator(
  "ClientQuiVeutBien",
  new Schema({})
);
module.exports = ClientQuiVeutBienSchema;
