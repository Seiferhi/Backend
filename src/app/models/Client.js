var mongoose = require("mongoose");
const User = require("./UserSchema");
const Schema = mongoose.Schema;
const Client = User.discriminator('Client', new Schema({
        role:{
            required:true,
            type: mongoose.Schema.ObjectId,
            ref : 'roles'
        },
        //forgot password
        resetPasswordToken:{
            type : String,
        },
        resetPasswordExpires:{
            type : Date
        },
        agent: [{ type: mongoose.Schema.ObjectId, ref: "Agents" }],

        Message : {
            type:String,
            trim :true,
        },
        TitreServiceDemande :{
            type :String,
            trim :true
        },
        Description :{
            type: String,
            trim :true
        },
    reclamation :[
        {
            type:mongoose.Schema.ObjectId,
            ref :"Reclamations"
        }
    ]



    })
);

module.exports=Client;
