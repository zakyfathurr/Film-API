const { body, validationResult } = require('express-validator');

const addToListValidator = [
  body('list_status')
    .notEmpty().withMessage('List status is required')
    .isIn(['plan_to_watch', 'watching', 'completed', 'on_hold', 'dropped'])
    .withMessage('Invalid list status'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = { addToListValidator };