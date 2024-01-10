const tataproduct = require("../../models/tata");


const tatacreate=async (req,res)=>{
    const {
        image_url,
        name,
        model,
        color,
        price,
        description,
         }= req.body;
         
    try{
     if(!image_url|| !name || !model || !color  || !price || !description){
            return res.json("all are required")
        }else{
            const tatacreate=await tataproduct.create({
                image_url,
                name,
                model,
                color,
                price,
                description,
            })
            console.log("product craeted one")
            res.json(" product craeted successfully")
        }

    }  
    catch(err){
        console.log('error', err)
}}
module.exports=tatacreate;