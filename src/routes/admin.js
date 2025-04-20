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