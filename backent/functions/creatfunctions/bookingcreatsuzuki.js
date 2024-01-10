const subookings = require("../../models/bookingschemasuzuki");


const createbookingsuzuki = async (req, res) => {
    const { name, phone, carType, email, address, productid, userId } = req.body
    
       
            const book = await subookings.create({
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
   

module.exports = createbookingsuzuki;