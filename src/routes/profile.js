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
/**
 * @swagger
 * tags:
 *   name: users
 *   description: API untuk mengelola profil pengguna
 */

/**
 * @swagger
 * /users/me:
 *   get:
 *     summary: Ambil profil pengguna yang sedang login
 *     tags: [users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Berhasil mengambil profil pengguna
 *       404:
 *         description: Pengguna tidak ditemukan
 *       500:
 *         description: Gagal mengambil profil
 */

/**
 * @swagger
 * /users/me:
 *   put:
 *     summary: Perbarui profil pengguna yang sedang login
 *     tags: [users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               display_name:
 *                 type: string
 *                 example: ZakyF
 *               bio:
 *                 type: string
 *                 example: Penggemar film animasi
 *               list_visibility:
 *                 type: string
 *                 enum: [public, private]
 *                 example: public
 *     responses:
 *       200:
 *         description: Berhasil memperbarui profil pengguna
 *       500:
 *         description: Gagal memperbarui profil
 */

/**
 * @swagger
 * /users/{username}:
 *   get:
 *     summary: Ambil profil publik berdasarkan username
 *     tags: [users]
 *     parameters:
 *       - in: path
 *         name: username
 *         required: true
 *         schema:
 *           type: string
 *         description: Username pengguna
 *     responses:
 *       200:
 *         description: Berhasil mengambil profil publik pengguna
 *       404:
 *         description: Pengguna tidak ditemukan
 *       500:
 *         description: Gagal mengambil profil pengguna
 */
