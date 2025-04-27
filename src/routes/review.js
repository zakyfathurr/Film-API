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
 *   name: Review
 *   description: API untuk mengelola ulasan/review film
 */

/**
 * @swagger
 * /reviews:
 *   post:
 *     summary: Buat ulasan baru untuk film
 *     tags: [Review]
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
 *                 example: 1
 *               rating:
 *                 type: integer
 *                 minimum: 1
 *                 maximum: 10
 *                 example: 8
 *               comment:
 *                 type: string
 *                 example: Film yang sangat menyentuh hati.
 *     responses:
 *       201:
 *         description: Berhasil membuat review
 *       400:
 *         description: Film tidak ada di list pengguna atau tidak valid
 *       500:
 *         description: Gagal membuat review
 */

/**
 * @swagger
 * /reviews/{id}:
 *   put:
 *     summary: Perbarui ulasan film milik pengguna
 *     tags: [Review]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID review yang akan diperbarui
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - rating
 *             properties:
 *               rating:
 *                 type: integer
 *                 minimum: 1
 *                 maximum: 10
 *                 example: 9
 *               comment:
 *                 type: string
 *                 example: abis rewatch lebih kerasa.
 *               film_id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Review berhasil diperbarui
 *       403:
 *         description: Tidak diizinkan memperbarui review orang lain
 *       404:
 *         description: Review tidak ditemukan
 *       500:
 *         description: Gagal memperbarui review
 */

/**
 * @swagger
 * /reviews/{id}:
 *   delete:
 *     summary: Hapus ulasan milik pengguna
 *     tags: [Review]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID review yang akan dihapus
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Review berhasil dihapus
 *       403:
 *         description: Tidak diizinkan menghapus review orang lain
 *       404:
 *         description: Review tidak ditemukan
 *       500:
 *         description: Gagal menghapus review
 */
