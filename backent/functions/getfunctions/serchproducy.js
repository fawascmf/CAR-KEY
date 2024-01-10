const productdata = require("../../models/productscheema");


const searchbyproducts=async (req,res)=>{

    const result=await productdata.find({
        "$or":[
            {
                name:{$regex: req.params.key}
            },
            {
                catogory:{$regex: req.params.key}
            },
            {
                location:{$regex: req.params.key}
            }
        ]
    })
    res.json(result)

}

module.exports=searchbyproducts;