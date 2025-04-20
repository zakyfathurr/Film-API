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
 *   description: Film management endpoints
 */

/**
 * @swagger
 * /films:
 *   get:
 *     summary: Get list of films
 *     tags: [Films]
 *     parameters:
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search by title
 *       - in: query
 *         name: genre
 *         schema:
 *           type: string
 *         description: Filter by genre name
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [not_yet_aired, airing, finished_airing]
 *         description: Filter by status
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           enum: [latest, rating, title]
 *         description: Sort results
 *     responses:
 *       200:
 *         description: List of films
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Film'
 */

/**
 * @swagger
 * /films/{id}:
 *   get:
 *     summary: Get film details
 *     tags: [Films]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Film details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Film'
 *       404:
 *         description: Film not found
 */