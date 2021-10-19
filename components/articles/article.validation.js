const Joi = require('joi');
const joiImageObject = require('../../base/joiImageObject');

exports.createArticleValidation = Joi.object({
  title: Joi.string().required().max(50),
  sourceFrom: Joi.string().required().max(50),
  sourceURL: Joi.string().required().uri(),
  images: Joi.array().items(joiImageObject).max(10),
  text: Joi.string().required(),
  publishDate: Joi.date(),
});

exports.updateArticleValidation = Joi.object({
  title: Joi.string().max(50),
  sourceFrom: Joi.string().max(50),
  sourceURL: Joi.string().uri(),
  images: Joi.array().items(joiImageObject).max(10),
  text: Joi.string(),
  publishDate: Joi.date(),
});
