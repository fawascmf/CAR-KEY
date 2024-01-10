const hundaiprodect = require("../../models/hundai");

const getbookcardbyhundai = async (req, res) => {
  try {
    const _id = req.params.id;
    
    
    const booking = await hundaiprodect.findOne({ _id }); 

    if (booking) {
      return res.json(booking);
    } else {
      return res.status(404).json({ message: "Booking not found" });
    }
  } catch (error) {
    console.error("Error fetching booking:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = getbookcardbyhundai;
