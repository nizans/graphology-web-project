const Joi = require('joi');

const joiImageObject = Joi.object({
  full: Joi.string().required(),
  thumb: Joi.string().required(),
});

module.exports = joiImageObject;
