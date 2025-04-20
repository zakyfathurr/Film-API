const { body, validationResult } = require('express-validator');

const validateFilm = [
  body('title').notEmpty().withMessage('Title is required'),
  body('synopsis').notEmpty().withMessage('Synopsis is required'),
  body('images').isArray({ min: 1 }).withMessage('At least one image is required'),
  body('genres').isArray({ min: 1 }).withMessage('At least one genre is required'),
  body('status')
    .isIn(['not_yet_aired', 'airing', 'finished_airing'])
    .withMessage('Invalid status'),
  body('totalEpisodes').isInt({ min: 1 }).withMessage('Total episodes must be at least 1'),
  body('releaseDate').isISO8601().toDate().withMessage('Invalid release date'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = { validateFilm };
