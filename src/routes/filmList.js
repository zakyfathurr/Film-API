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
 *   name: film list
 *   description: Manage user film lists
 */

/**
 * @swagger
 * /user-lists/{filmId}:
 *   post:
 *     summary: Add/update film in user list
 *     tags: [film list]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: filmId
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
 *               - list_status
 *             properties:
 *               list_status:
 *                 type: string
 *                 enum: [plan_to_watch, watching, completed, on_hold, dropped]
 *               userId:
 *                 type: integer
 *                 description: Required for admin to modify other users' lists
 *     responses:
 *       201:
 *         description: Film added to list
 *       400:
 *         description: Invalid status or validation error
 *       403:
 *         description: Forbidden (admin only)
 */

/**
 * @swagger
 * /user-lists/{userId}:
 *   get:
 *     summary: Get user's film list
 *     tags: [film list]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [plan_to_watch, watching, completed, on_hold, dropped]
 *     responses:
 *       200:
 *         description: User's film list
 *       403:
 *         description: List is private
 *       404:
 *         description: User not found
 */