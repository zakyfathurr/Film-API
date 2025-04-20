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

/**
 * @swagger
 * tags:
 *   name: Review Reactions
 *   description: Like/dislike reviews
 */

/**
 * @swagger
 * /reviews/{reviewId}:
 *   post:
 *     summary: React to a review (like/dislike)
 *     tags: [Review Reactions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: reviewId
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - reactionType
 *             properties:
 *               reactionType:
 *                 type: string
 *                 enum: [like, dislike]
 *     responses:
 *       200:
 *         description: Reaction added/updated
 *       400:
 *         description: Invalid reaction type
 *       404:
 *         description: Review not found
 */

/**
 * @swagger
 * /reviews/{reviewId}:
 *   get:
 *     summary: Get review reactions count
 *     tags: [Review Reactions]
 *     parameters:
 *       - in: path
 *         name: reviewId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Reaction counts
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 likes:
 *                   type: integer
 *                 dislikes:
 *                   type: integer
 *       404:
 *         description: Review not found
 */