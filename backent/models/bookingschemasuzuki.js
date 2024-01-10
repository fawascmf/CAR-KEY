const mongoose=require('mongoose');

const bookingschema=mongoose.Schema({
    name: {
        type: String,
       
      },
      phone: {
        type: String,
        
      },
      productid:{
        type:String,
        
      },
      email:{
        type:String,
       
      },
      address:{
        type:String,
      
      },
      userId:{
        type:String,
       
       },
      carType: {
        type: String,
      
      }
})

const subookings=mongoose.model('subooking',bookingschema)

module.exports=subookings;