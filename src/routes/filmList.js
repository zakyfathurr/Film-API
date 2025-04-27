const express = require('express');
const router = express.Router();
const { authenticate } = require('../middleware/auth');
const { addFilmToList, getUserFilmList } = require('../controller/listfilmController');
const { addToListValidator } = require('../validators/listfilmValidator');

// Tambahkan film ke list user
router.post('/:filmId', authenticate, addToListValidator, addFilmToList);

// Dapatkan list film user
router.get('/:userId', getUserFilmList);

module.exports = router;
/**
 * @swagger
 * tags:
 *   name: UserFilmList
 *   description: API untuk mengelola daftar film pengguna
 */

/**
 * @swagger
 * /listFilms/{filmId}:
 *   post:
 *     summary: Tambahkan film ke daftar pengguna
 *     tags: [UserFilmList]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: filmId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID film yang akan ditambahkan
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               list_status:
 *                 type: string
 *                 enum: [plan_to_watch, watching, completed, on_hold, dropped]
 *                 example: plan_to_watch
 *     responses:
 *       201:
 *         description: Film berhasil ditambahkan ke daftar
 *       400:
 *         description: Status daftar tidak valid atau film belum tayang tidak boleh ditambahkan
 *       404:
 *         description: Film tidak ditemukan
 *       500:
 *         description: Gagal menambahkan film ke daftar
 */

/**
 * @swagger
 * /listFilms/{userId}:
 *   get:
 *     summary: Ambil daftar film milik pengguna
 *     tags: [UserFilmList]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID pengguna
 *       - in: query
 *         name: status
 *         required: false
 *         schema:
 *           type: string
 *           enum: [plan_to_watch, watching, completed, on_hold, dropped]
 *         description: Filter daftar berdasarkan status
 *     responses:
 *       200:
 *         description: Berhasil mengambil daftar film
 *       400:
 *         description: Filter status tidak valid
 *       403:
 *         description: Daftar bersifat private
 *       404:
 *         description: Pengguna tidak ditemukan
 *       500:
 *         description: Gagal mengambil daftar film
 */
