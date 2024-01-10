const productdata = require("../../models/productscheema");


const productview=async (req,res)=>{
    const {name}=req.body;
    
        const impuser=await productdata.find({})
            console.log("products imported")
            res.json(impuser)
          
    }
module.exports=productview;