// routes/authHandling.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authentication = require('../middleware/authentication');
const authorisation = require('../middleware/authorisation');

// Route to delete a user
router.post(
    "/delete/user",
    authentication,
    authorisation({ isAdmin: false }), // Adjust as needed
    (req, res) => authController.delete_user_by_username(req, res),
);

module.exports = router;
