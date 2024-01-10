const tataproduct = require("../../models/tata");

const updatetata = async (req, res) => {
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

      const updtata = await tataproduct.findByIdAndUpdate(_id, {
        name,
        price,
        model,
        description,
        color,
        image_url,
    
      });

      res.json(updtata);
    }
module.exports = updatetata;
