const mongoose=require("mongoose")

const hundaiSchema=mongoose.Schema({
 image_url:{type:String,required: true,required: true},
 name:{type:String,required: true},
 model:{type:Number,required: true},
 color:{type:String,required: true},
 price:{type:Number,required: true},
 description:{type:String,required: true}
})

const hundaiprodect=mongoose.model("hundaiproduct",hundaiSchema)

module.exports=hundaiprodect