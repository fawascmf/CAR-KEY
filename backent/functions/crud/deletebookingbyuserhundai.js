const hubookings = require("../../models/bookingscheemahundai");

const deletebookingsbyuserhundai=async (req,res)=>{
    const _id=req.params.id
    const deletebooking=await hubookings.deleteOne({_id:_id})
    res.json(deletebooking);
}
module.exports=deletebookingsbyuserhundai;