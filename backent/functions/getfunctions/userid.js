const productdata = require("../../models/productscheema");


const userid=async (req,res)=>{
    const getid=req.params.id;
    const getuser=await productdata.find({_id:getid})
    res.json(getuser)
}
module.exports=userid;