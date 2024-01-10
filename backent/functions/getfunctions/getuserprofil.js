const jwt = require('jsonwebtoken');
const datauser = require('../../models/userscheema');

const profileuser = async (req, res) => {
  try {
    // Get the token from the Authorization header
    const token = req.header('Authorization').replace('Bearer ', '');

    // Verify the token
const decoded = jwt.verify(token, 'ree_val15432'); // Replace 'your-secret-key' with your actual secret key

    // Use the decoded user ID to fetch user data
    const loggedInUserId = decoded._id;
    const loggedInUser = await datauser.findById(loggedInUserId);

    if (!loggedInUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Respond with the user's data
    res.json(loggedInUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = profileuser;
