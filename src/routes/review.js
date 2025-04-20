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


/**
 * @swagger
 * tags:
 *   name: Reviews
 *   description: Film review management
 */

/**
 * @swagger
 * /reviews:
 *   post:
 *     summary: Create a review
 *     tags: [Reviews]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - film_id
 *               - rating
 *             properties:
 *               film_id:
 *                 type: integer
 *               rating:
 *                 type: integer
 *                 minimum: 1
 *                 maximum: 10
 *               comment:
 *                 type: string
 *                 maxLength: 1000
 *     responses:
 *       201:
 *         description: Review created
 *       400:
 *         description: Validation error
 */

/**
 * @swagger
 * /reviews/{id}:
 *   put:
 *     summary: Update a review
 *     tags: [Reviews]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               rating:
 *                 type: integer
 *                 minimum: 1
 *                 maximum: 10
 *               comment:
 *                 type: string
 *                 maxLength: 1000
 *     responses:
 *       200:
 *         description: Review updated
 *       403:
 *         description: Not your review
 *       404:
 *         description: Review not found
 */

/**
 * @swagger
 * /reviews/{id}:
 *   delete:
 *     summary: Delete a review
 *     tags: [Reviews]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Review deleted
 *       403:
 *         description: Not your review
 *       404:
 *         description: Review not found
 */