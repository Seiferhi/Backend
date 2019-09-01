var mongoose = require("mongoose");
const User = require("./UserSchema");
const Schema = mongoose.Schema;

const Client = User.discriminator(
  "Client",
  new Schema({
  }
);

module.exports = Client;
