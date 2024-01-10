const suzukiprodect = require("../../models/suzuki");

const suzukiget=async (req,res)=>{
const _id=req.params.id
const getproduct=await suzukiprodect.findById(_id)
res.json(getproduct);
}

module.exports=suzukiget;