const Joi = require('joi');

exports.createAdminValidation = Joi.object({
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(6).max(12).pattern(new RegExp('^[a-zA-Z0-9!@#$%^&*()-+_{}[]|`~]+$')).required(),
  validatePassword: Joi.string().min(6).max(12).pattern(new RegExp('^[a-zA-Z0-9!@#$%^&*()-+_{}[]|`~]+$')).required(),
  name: Joi.string().max(50),
});

exports.updateAdminValidation = Joi.object({
  email: Joi.string().email().lowercase(),
  password: Joi.string().min(6).max(12).pattern(new RegExp('^[a-zA-Z0-9!@#$%^&*()-+_{}[]|`~]+$')),
  name: Joi.string().max(50),
});

exports.loginValidation = Joi.object({
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(6).max(12).pattern(new RegExp('^[a-zA-Z0-9!@#$%^&*()-+_{}[]|`~]+$')).required(),
});

exports.forgotPasswordValidation = Joi.object({
  email: Joi.string().email().lowercase().required(),
});
