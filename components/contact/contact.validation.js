const Joi = require('joi');

const requestSubjects = [
  'הזמנת ספר',
  'ייעוץ עסקי',
  'הרצאות',
  'קורסים וסדנאות',
  'ייעוץ אישי גרפולוגי',
  'גרפולוגיה משפטית',
];

exports.contactRequestValidation = Joi.object({
  from: Joi.string().required().max(50),
  email: Joi.string().required().email(),
  phone: Joi.string().required().regex(new RegExp('^0(5[^7]|[2-4]|[8-9]|7[0-9])[0-9]{7}$')),
  notes: Joi.string().optional().max(255),
  subject: Joi.string()
    .optional()
    .valid(...requestSubjects),
});

exports.bookOrderRequestValidation = Joi.object({
  book: Joi.object({
    id: Joi.string().required(),
    title: Joi.string().required().max(50),
    url: Joi.string().required().uri(),
  }),
  name: Joi.string().required().max(50),
  email: Joi.string().required().email(),
  notes: Joi.string().optional().max(255),
  phone: Joi.string().required().regex(new RegExp('^0(5[^7]|[2-4]|[8-9]|7[0-9])[0-9]{7}$')),
});
