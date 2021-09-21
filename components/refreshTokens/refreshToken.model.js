const mongoose = require('mongoose');
const { isEmail } = require('validator');

const refreshTokenSchema = new mongoose.Schema({
  admin_email: {
    type: String,
    require: [true, 'Admin email required'],
    validate: [isEmail, 'Invalid email address'],
  },
  refresh_token: {
    type: String,
    require: [true, 'Must include a refresh token'],
    unique: [true, 'Token already in exists'],
  },
});

module.exports = mongoose.model('refreshToken', refreshTokenSchema);
