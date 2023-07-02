const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');
const auth = require('../middleware/auth'); // Assuming you have an auth middleware

// Routes related to users
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/me', auth, userController.getUser);

module.exports = router;