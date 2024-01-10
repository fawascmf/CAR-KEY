const hundaiproduct = require("../../models/hundai");

const updatehundai = async (req, res) => {
  const _id = req.params.id;
  console.log(_id)
  const {
    name,
    price,
    model,
    description,
    color,
    image_url,

  } = req.body;

      const updhundai = await hundaiproduct.findByIdAndUpdate(_id, {
        name,
        price,
        model,
        description,
        color,
        image_url,
    
      });

      res.json(updhundai);
    }
module.exports = updatehundai;
