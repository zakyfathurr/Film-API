const express = require('express');
const router = express.Router();
const { authenticate } = require('../middleware/auth');
const { reactToReview, getReviewReactions } = require('../controller/reviewReactionController');
const { reactToReviewValidator } = require('../validators/reviewReactionValidator');

// Like/dislike perlu auth(user/admin)
router.post('/:reviewId', authenticate, reactToReviewValidator, reactToReview);

// Get jumlah like/dislike  bisa guest
router.get('/:reviewId', getReviewReactions);

module.exports = router;