const { body } = require('express-validator');

exports.urlValidatorRules = [
  body('originalUrl', 'URL should be a valid URL').isURL().notEmpty(),
  body('customName', 'Custom name should be atleast 5 letters').optional().isLength({ min: 5 })
];

exports.updateUrlValidatorRules = [
  body('originalUrl', 'URL should be a valid URL').optional().isURL(),
  body('customName', 'Custom name should be atleast 5 letters').optional().isLength({ min: 5 })
];
