const mongoose=require("mongoose")

const tataSchema=mongoose.Schema({
 image_url:{type:String,required: true},
 name:{type:String,required: true},
 model:{type:Number,required: true},
 color:{type:String,required: true},
 price:{type:Number,required: true},
 description:{type:String,required: true}
})

const tataproduct=mongoose.model("tataproduct",tataSchema)

module.exports=tataproduct