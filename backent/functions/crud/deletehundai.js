const hundaiprodect = require("../../models/hundai");


const deletehundaiprodect=async (req,res)=>{
    const deletid=req.params.id;

    const details= await hundaiprodect.deleteOne({_id:deletid});
    
    console.log("user deleted succesfully");
    res.json(details)
}
module.exports=deletehundaiprodect;