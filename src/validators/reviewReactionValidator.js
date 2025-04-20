const { body, validationResult } = require('express-validator');

const reactToReviewValidator = [
  body('reactionType')
    .notEmpty().withMessage('Reaction type is required')
    .isIn(['like', 'dislike']).withMessage('Reaction type must be either like or dislike'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = { reactToReviewValidator };