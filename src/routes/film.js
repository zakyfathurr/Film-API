const express = require('express');
const router = express.Router();
const filmController = require('../controller/filmController');

// Get list of films bisa untuk guest
router.get('/', filmController.getFilms);

// Get film detail bisa untuk guest
router.get('/:id', filmController.getFilmDetail);



module.exports = router;
/**
 * @swagger
 * tags:
 *   name: Films
 *   description: Endpoints for viewing films
 */

/**
 * @swagger
 * /films:
 *   get:
 *     summary: Get list of films (guest accessible)
 *     tags: [Films]
 *     parameters:
 *       - in: query
 *         name: title
 *         schema:
 *           type: string
 *         description: Search film by title
 *       - in: query
 *         name: genre
 *         schema:
 *           type: string
 *         description: Filter by genre name
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [ongoing, completed, upcoming]
 *         description: Filter by film status
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           enum: [latest, rating, title]
 *         description: Sort by latest release, highest rating, or title
 *     responses:
 *       200:
 *         description: List of films
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   status:
 *                     type: string
 *                   total_episodes:
 *                     type: integer
 *                   release_date:
 *                     type: string
 *                     format: date
 *                   average_rating:
 *                     type: number
 *                   review_count:
 *                     type: integer
 *                   genres:
 *                     type: array
 *                     items:
 *                       $ref: '#/components/schemas/Genres'
 *       500:
 *         description: Failed to get films
 */

/**
 * @swagger
 * /films/{id}:
 *   get:
 *     summary: Get film detail by ID (guest accessible)
 *     tags: [Films]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Film ID
 *     responses:
 *       200:
 *         description: Film detail
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 title:
 *                   type: string
 *                 synopsis:
 *                   type: string
 *                 status:
 *                   type: string
 *                 total_episodes:
 *                   type: integer
 *                 release_date:
 *                   type: string
 *                   format: date
 *                 genres:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Genre'
 *                 images:
 *                   type: array
 *                   items:
 *                     type: string
 *                     format: uri
 *                 average_rating:
 *                   type: number
 *                 review_count:
 *                   type: integer
 *                 user_count:
 *                   type: integer
 *                 recent_reviews:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       rating:
 *                         type: number
 *                       comment:
 *                         type: string
 *                       created_at:
 *                         type: string
 *                         format: date-time
 *                       users:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: integer
 *                           username:
 *                             type: string
 *                           display_name:
 *                             type: string
 *       404:
 *         description: Film not found
 *       500:
 *         description: Failed to get film detail
 */
