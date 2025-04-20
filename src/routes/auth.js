const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
const { registerValidator, loginValidator } = require('../validators/authValidator');

// User registration
router.post('/register', registerValidator, authController.register);

// User login
router.post('/login', loginValidator, authController.login);

module.exports = router;