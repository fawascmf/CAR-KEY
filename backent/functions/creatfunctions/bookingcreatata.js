const tabookings = require("../../models/bookinfscheematata");


const createbookingtata = async (req, res) => {
    const { name, phone, carType, email, address, productid, userId } = req.body
    
       
            const book = await tabookings.create({
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
   

module.exports = createbookingtata;