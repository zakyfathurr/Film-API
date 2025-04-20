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
 *   description: Admin management endpoints
 */

/**
 * @swagger
 * /admin/genres:
 *   post:
 *     summary: Create a new genre (Admin only)
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Genre created
 *       403:
 *         description: Admin access required
 */

/**
 * @swagger
 * /admin/genres/{id}:
 *   put:
 *     summary: Update a genre (Admin only)
 *     tags: [Admin]
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
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Genre updated
 *       403:
 *         description: Admin access required
 *       404:
 *         description: Genre not found
 */

/**
 * @swagger
 * /admin/films:
 *   post:
 *     summary: Create a new film (Admin only)
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - synopsis
 *               - images
 *               - genres
 *               - status
 *               - totalEpisodes
 *               - releaseDate
 *             properties:
 *               title:
 *                 type: string
 *               synopsis:
 *                 type: string
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *               genres:
 *                 type: array
 *                 items:
 *                   type: integer
 *               status:
 *                 type: string
 *                 enum: [not_yet_aired, airing, finished_airing]
 *               totalEpisodes:
 *                 type: integer
 *               releaseDate:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Film created
 *       400:
 *         description: Validation error
 *       403:
 *         description: Admin access required
 */