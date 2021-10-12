const Joi = require('joi');
const joiImageObject = require('../../base/joiImageObject');

exports.createCertificationValidation = Joi.object({
  images: Joi.array().required().items(joiImageObject).max(10),
});
