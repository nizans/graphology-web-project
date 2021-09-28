const mongoose = require('mongoose');
const { isEmail } = require('validator');

const mailSchema = new mongoose.Schema({
  email: {
    type: String,
    require: [true, 'Email required'],
    unique: [true, 'Email already in use'],
    validate: [isEmail, 'Invalid email address'],
  },
  sendBookOrders: { type: Boolean, default: false },
  sendContactRequests: { type: Boolean, default: false },
});


module.exports = mongoose.model('Mail', mailSchema);
