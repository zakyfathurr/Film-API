const express = require('express');
const router = express.Router();
const { authenticate } = require('../middleware/auth');
const profileController = require('../controller/profileController');
const { updateProfileValidator } = require('../validators/profileValidator');

// Get user profile khusus user
router.get('/me', authenticate, profileController.getProfile);

// Update user profile khusus user
router.put('/me', authenticate, updateProfileValidator, profileController.updateProfile);

//bisa untuk guest
router.get('/:username', profileController.getUserPublicProfile);

module.exports = router;