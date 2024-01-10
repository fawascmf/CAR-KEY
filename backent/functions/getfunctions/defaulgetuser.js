const datauser = require("../../models/userscheema");


const dgetuserid=async (req,res)=>{
    const _id=req.params.id
const getproduct=await datauser.findById(_id)
res.json(getproduct);

}
module.exports=dgetuserid