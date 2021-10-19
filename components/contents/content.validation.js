const Joi = require('joi');
const joiImageObject = require('../../base/joiImageObject');

exports.createContentValidation = Joi.object({
  title: Joi.string().required().max(50),
  subtitle: Joi.string().optional().max(255),
  images: Joi.array().items(joiImageObject).optional().max(10),
  text: Joi.string().required(),
  publishDate: Joi.date().optional(),
});

exports.updateContentValidation = Joi.object({
  title: Joi.string().optional().max(50),
  subtitle: Joi.string().optional().max(255),
  images: Joi.array().items(joiImageObject).optional().max(10),
  text: Joi.string().optional(),
  publishDate: Joi.date().optional(),
});
