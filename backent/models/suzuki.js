const mongoose=require("mongoose")

const suzukiSchema=mongoose.Schema({
 image_url:{type:String,required: true},
 name:{type:String,required: true},
 model:{type:Number,required: true},
 color:{type:String,required: true},
 price:{type:Number,required: true},
 description:{type:String,required: true}
})

const suzukiprodect=mongoose.model("suzukiprodect",suzukiSchema)

module.exports=suzukiprodect