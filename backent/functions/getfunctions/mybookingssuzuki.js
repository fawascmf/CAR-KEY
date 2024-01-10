const subookings = require("../../models/bookingschemasuzuki");



const getbookingsbyuser=async (req,res)=>{
    const _id=req.params.id
    const booking=await subookings.findOne({userId:_id})
    if(booking){
        // return res.status(201).json({"message":"success","data":booking});
        res.json(booking)
    }else{
        res.json("bookings not found");
    }
}
module.exports=getbookingsbyuser;