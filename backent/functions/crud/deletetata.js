const tataprodect = require("../../models/tata");



const deletetataprodect=async (req,res)=>{
    const deleteid=req.params.id;

    const details= await tataprodect.deleteOne({_id:deleteid});
    
    console.log("user deleted succesfully");
    res.json(details)
}
module.exports=deletetataprodect;