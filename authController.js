// controllers/authController.js
const { UserModel } = require('../models'); // Adjust the path as necessary

exports.delete_user_by_username = async (req, res) => {
    try {
        const { username } = req.body;

        // Ensure username is provided
        if (!username) {
            return res.status(400).json({ message: "Username is required" });
        }

        // Delete user by username
        const result = await UserModel.destroy({
            where: {
                username: username
            }
        });

        // Check if deletion was successful
        if (result) {
            res.status(200).json({ message: "User deleted successfully" });
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
