const hubookings = require("../../models/bookingscheemahundai")


const createbookinghundai = async (req, res) => {
    const { name, phone, carType, email, address, productid, userId } = req.body
    
       
            const book = await hubookings.create({
                name,
                phone,
                email,
                address,
                productid,
                userId,
                carType
            })
            res.json("booking started")
        }
   

module.exports = createbookinghundai;