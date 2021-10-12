const Joi = require('joi');

exports.createRecommendationValidation = Joi.object({
  text: Joi.string().required().max(255),
  name: Joi.string().required().max(50),
});

exports.updateRecommendationValidation = Joi.object({
  text: Joi.string().optional().max(255),
  name: Joi.string().optional().max(50),
});
