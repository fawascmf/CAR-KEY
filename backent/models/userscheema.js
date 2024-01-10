const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    firstname:{type:String,required: true},
    secondname:{type:String,required: true},
    email:{type:String,required: true},
    password:{type:String,required: true},
})

const datauser=mongoose.model("datauser",userSchema)

module.exports=datauser