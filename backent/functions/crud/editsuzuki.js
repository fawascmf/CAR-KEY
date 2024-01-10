const suzukiprodect = require("../../models/suzuki");

const updatesuzuki = async (req, res) => {
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

      const updsuzuki = await suzukiprodect.findByIdAndUpdate(_id, {
        name,
        price,
        model,
        description,
        color,
        image_url,
    
      });

      res.json(updsuzuki);
    }
module.exports = updatesuzuki;
