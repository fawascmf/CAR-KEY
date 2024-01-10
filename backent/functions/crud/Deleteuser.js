const datauser = require("../../models/userscheema");


const deleteuser=async (req,res)=>{
    const userid=req.params.id;

    const details= await datauser.deleteOne({_id:userid});
    
    console.log("user deleted succesfully");
    res.json(details)
}
module.exports=deleteuser;