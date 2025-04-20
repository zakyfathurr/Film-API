const { body, validationResult } = require('express-validator');

const validateReview = [
  body('film_id')
    .notEmpty().withMessage('Film ID is required')
    .isInt().withMessage('Film ID must be an integer'),
  body('rating')
    .notEmpty().withMessage('Rating is required')
    .isInt({ min: 1, max: 10 }).withMessage('Rating must be between 1 and 10'),
  body('comment')
    .optional()
    .isLength({ max: 1000 }).withMessage('Comment must be less than 1000 characters'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = { validateReview };