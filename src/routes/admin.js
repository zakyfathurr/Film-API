const express = require('express');
const router = express.Router();
const { authenticate, authorizeAdmin } = require('../middleware/auth');
const { 
  createGenre,
  updateGenre,
  createFilm 
} = require('../controller/adminController');
const { validateFilm } = require('../validators/filmValidator');

// Genre Management
router.post('/genres', authenticate, authorizeAdmin, createGenre);
router.put('/genres/:id', authenticate, authorizeAdmin, updateGenre);

// Film Management
router.post('/films', authenticate, authorizeAdmin, validateFilm, createFilm);

module.exports = router;
/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Endpoints khusus untuk administrator
 */

/**
 * @swagger
 * /users/genres:
 *   post:
 *     summary: Membuat genre baru
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Action
 *     responses:
 *       201:
 *         description: Genre berhasil dibuat
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *       500:
 *         description: Gagal membuat genre
 */

/**
 * @swagger
 * /users/genres/{id}:
 *   put:
 *     summary: Memperbarui genre berdasarkan ID
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID genre
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Drama
 *     responses:
 *       200:
 *         description: Genre berhasil diperbarui
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *       500:
 *         description: Gagal memperbarui genre
 */

/**
 * @swagger
 * /users/films:
 *   post:
 *     summary: Membuat film baru
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Your Name
 *               synopsis:
 *                 type: string
 *                 example: A story of two teenagers who switch bodies...
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["http://example.com/image1.jpg", "http://example.com/image2.jpg"]
 *               genres:
 *                 type: array
 *                 items:
 *                   type: integer
 *                 example: [1, 3]
 *               status:
 *                 type: string
 *                 enum: [not_yet_aired, airing, finished_airing]
 *               totalEpisodes:
 *                 type: integer
 *                 example: 12
 *               releaseDate:
 *                 type: string
 *                 format: date
 *                 example: 2024-07-01
 *     responses:
 *       201:
 *         description: Film berhasil dibuat
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Film'
 *       500:
 *         description: Gagal membuat film
 */
