const Joi = require('joi');
const joiImageObject = require('../../base/joiImageObject');

exports.createBookValidation = Joi.object({
  title: Joi.string().required().max(50),
  author: Joi.string().required().max(50),
  images: Joi.array().items(joiImageObject).max(10),
  description: Joi.string().required(),
  publishDate: Joi.date().optional().default(Date.now()),
});

exports.updateBookValidation = Joi.object({
  title: Joi.string().optional().max(50),
  author: Joi.string().optional().max(50),
  images: Joi.array().optional().items(joiImageObject).max(10),
  description: Joi.string().optional(),
  publishDate: Joi.date().optional(),
});
