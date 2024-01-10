const TataProduct = require('../../models/tata');

const tataview=async (req,res)=>{
   
    const impuser=await TataProduct.find({})
            console.log("prodect imported")
            res.json(impuser) 
            
    }
module.exports=tataview