const datauser = require("../../models/userscheema")


const userview=async (req,res)=>{
    
        const impuser=await datauser.find({})
            console.log("user imported")
            res.json(impuser)
          
    }
module.exports=userview