const express = require('express');
const router = express.Router();
const filmController = require('../controller/filmController');

// Get list of films bisa untuk guest
router.get('/', filmController.getFilms);

// Get film detail bisa untuk guest
router.get('/:id', filmController.getFilmDetail);

module.exports = router;