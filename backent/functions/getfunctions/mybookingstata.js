const tabookings = require("../../models/bookinfscheematata");



const getbookingsbyuser=async (req,res)=>{
    const _id=req.params.id
    const booking=await tabookings.findOne({userId:_id})
    if(booking){
        // return res.status(201).json({"message":"success","data":booking});
        res.json(booking)
    }else{
        res.json("bookings not found");
    }
}
module.exports=getbookingsbyuser;