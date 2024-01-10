const hundaiprodect = require("../../models/hundai");



const hundaiview=async (req,res)=>{
   
    const impuser=await hundaiprodect.find({})
            console.log("prodect imported")
            res.json(impuser)
   
         
          
    }
module.exports=hundaiview