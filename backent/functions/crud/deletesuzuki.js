const suzukiprodect = require("../../models/suzuki");


const deletesuzukiprodecct=async (req,res)=>{
    const deleteid=req.params.id;

    const details= await suzukiprodect.deleteOne({_id:deleteid});
    
    console.log("user deleted succesfully");
    res.json(details)
}
module.exports=deletesuzukiprodecct;