// const bookings = require("../../models/bookingscheema");

// const confirmbookings=async (req,res)=>{
//     try{
//         const _id= req.params.id;
//         const {name,phone,productid,userId,address,email,carType}=req.body

//         const bookingUpdate=await bookings.findByIdAndUpdate(_id,
//             {name,intro,phone,productid,userId,address,email,carType
//         })

//         res.json(bookingUpdate)

//     }catch(error){
//         console.log('error is booking confirmation'(error))
//     }

// }
// module.exports=confirmbookings;