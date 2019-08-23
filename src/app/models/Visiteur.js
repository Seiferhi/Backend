var mongoose = require("mongoose");
const Client = require("./Client");
const Schema = mongoose.Schema;

const VisteurSchema = Client.discriminator("Visteur", new Schema({}));
module.exports = VisteurSchema;
