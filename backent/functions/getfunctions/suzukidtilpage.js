const suzukiprodect = require('../../models/suzuki');

const suzukidetil = async (req, res) => {
    const id = req.params.id;

    try {
        // Use findById method to find a document by its ID
        const viewpdct = await suzukiprodect.findById(id);

        if (!viewpdct) {
            // If no product is found with the given ID, send an error response
            return res.status(404).json({ error: 'Product not found' });
        }

        // If a product is found, send it as a JSON response
        res.json(viewpdct);
    } catch (error) {
        // Handle any errors that may occur during the query
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = suzukidetil;
