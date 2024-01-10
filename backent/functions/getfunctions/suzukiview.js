const suzukiprodect = require("../../models/suzuki");


const suzukiview=async (req,res)=>{
   
    const impuser=await suzukiprodect.find({})
            console.log("prodect imported")
            res.json(impuser) 
            
    }
module.exports=suzukiview