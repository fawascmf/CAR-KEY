const tataproduct = require("../../models/tata");


const tataget=async (req,res)=>{
const _id=req.params.id
const getproduct=await tataproduct.findById(_id)
res.json(getproduct);
}

module.exports=tataget;