const hundaiprodect = require("../../models/hundai");

const hundaiget=async (req,res)=>{
const _id=req.params.id
const getproduct=await hundaiprodect.findById(_id)
res.json(getproduct);
}

module.exports=hundaiget;