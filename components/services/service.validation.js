const Joi = require('joi');
const joiImageObject = require('../../base/joiImageObject');

exports.createServiceValidation = Joi.object({
  title: Joi.string().required().max(50),
  description: Joi.string().required(),
  image: joiImageObject.optional(),
});

exports.updateServiceValidation = Joi.object({
  title: Joi.string().optional().max(50),
  description: Joi.string().optional(),
  image: joiImageObject.optional(),
});
