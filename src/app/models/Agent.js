var mongoose = require("mongoose");
const UserSchema = require("./UserSchema");
const Schema = mongoose.Schema;
const AgentSchema = UserSchema.discriminator(
  "Agent",
  new Schema({
      role:{
          required:true,
          type: mongoose.Schema.ObjectId,
          ref : 'roles'
      },
      maison: [
    {type:mongoose.Schema.ObjectId,
        ref:"Maison"
    }],
      bureau :[
          {type : mongoose.Schema.ObjectId ,ref :"Bureau"}
      ],

      appartement: [
          {type:mongoose.Schema.ObjectId,ref:"Appartement"}],

      localCommerciale: [
          {type:mongoose.Schema.ObjectId,ref:"LocalCommerciale"}],

      residence: [
          {type:mongoose.Schema.ObjectId,ref:"Residence"}],

      terrain: [
          {type:mongoose.Schema.ObjectId,ref:"Terrain"}],

      villa: [
          {type:mongoose.Schema.ObjectId,ref:"Villa"}],
  })

);
module.exports =AgentSchema
