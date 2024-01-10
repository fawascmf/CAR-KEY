const mongoose=require("mongoose")

const adminscema=mongoose.Schema({

    email:{type:String},
    password:{type:String}


})

const admins=mongoose.model('admins',adminscema);

module.exports=admins