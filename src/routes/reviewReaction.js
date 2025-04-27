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
 *   name: ReviewReaction
 *   description: API untuk memberi reaksi (like/dislike) terhadap review film
 */

/**
 * @swagger
 * /review-reaction/{reviewId}:
 *   post:
 *     summary: Beri atau ubah reaksi (like/dislike) terhadap review
 *     tags: [ReviewReaction]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: reviewId
 *         required: true
 *         description: ID dari review yang akan diberi reaksi
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
 *                 example: like
 *     responses:
 *       200:
 *         description: Reaksi berhasil diberikan/diperbarui/dihapus
 *       400:
 *         description: Tipe reaksi tidak valid
 *       404:
 *         description: Review tidak ditemukan
 *       500:
 *         description: Gagal memproses reaksi
 */

/**
 * @swagger
 * /review-reaction/{reviewId}:
 *   get:
 *     summary: Ambil jumlah like dan dislike pada review
 *     tags: [ReviewReaction]
 *     parameters:
 *       - in: path
 *         name: reviewId
 *         required: true
 *         description: ID dari review yang ingin diambil reaksinya
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Jumlah like dan dislike berhasil diambil
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 likes:
 *                   type: integer
 *                   example: 5
 *                 dislikes:
 *                   type: integer
 *                   example: 2
 *       500:
 *         description: Gagal mengambil data reaksi
 */
