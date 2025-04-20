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