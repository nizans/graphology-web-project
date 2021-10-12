const Joi = require('joi');

exports.createVideoValidation = Joi.object({
  title: Joi.string().required().max(50),
  description: Joi.string().required(),
  url: Joi.string().required(),
});

exports.updateVideoValidation = Joi.object({
  title: Joi.string().optional().max(50),
  description: Joi.string().optional(),
  url: Joi.string().optional(),
});
