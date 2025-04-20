const { body, validationResult } = require('express-validator');

const updateProfileValidator = [
  body('display_name')
    .optional()
    .isLength({ min: 3 }).withMessage('Display name must be at least 3 characters'),
  body('bio')
    .optional()
    .isLength({ max: 500 }).withMessage('Bio must be less than 500 characters'),
  body('list_visibility')
    .optional()
    .isIn(['public', 'private']).withMessage('Visibility must be either public or private'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = { updateProfileValidator };