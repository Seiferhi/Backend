var mongoose = require("mongoose");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const baseOptions = {
  discriminatorKey: "itemtype", // our discriminator key, could be anything
  collection: "Acteur" // the name of our collection
};
Schema = mongoose.Schema;

const UserSchema = mongoose.model(
  "User",
  new mongoose.Schema(
    {
      role: {
        required: true,
        type: mongoose.Schema.ObjectId,
        ref: "roles"
      },
      nom: {
        type: String,
        required: true,
        trim: true
      },
      prenom: {
        required: true,
        type: String
      },
      adress: {
        type: String
      },

      tel: {
        type: String
      },

      email: {
        required: true,
        type: String
      },

      motDePasse: {
        required: true,
        type: String
      },
      motDePasse2: {
        required: true,
        type: String
      }
    },
    baseOptions
  ).pre("save", function(next) {
    this.motDePasse = bcrypt.hashSync(this.motDePasse, saltRounds);
    next();
  })
);

module.exports = mongoose.model("User");
