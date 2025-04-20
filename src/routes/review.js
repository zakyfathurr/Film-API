const express = require('express');
const router = express.Router();
const { authenticate } = require('../middleware/auth');
const reviewController = require('../controller/reviewController');
const { validateReview } = require('../validators/reviewValidator');

// Create review
router.post('/', authenticate, validateReview, reviewController.createReview);

// Update review
router.put('/:id', authenticate, validateReview, reviewController.updateReview);

// Delete review
router.delete('/:id', authenticate, reviewController.deleteReview);

module.exports = router;