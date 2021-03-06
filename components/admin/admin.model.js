const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');
const SALT = 10;

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    require: [true, 'Email required'],
    unique: [true, 'Email already in use'],
    validate: [isEmail, 'Invalid email address'],
  },
  password: { type: String, require: [true, 'Password required'], minLength: 6, maxLength: 20 },
  name: { type: String, maxLength: 50 },
  passwordResetToken: { type: String, default: null },
  uploadDate: { type: Date, default: Date.now() },
});

adminSchema.pre('save', function (next) {
  const admin = this;
  if (!admin.isModified('password')) return next();
  bcrypt.genSalt(SALT, function (err, salt) {
    if (err) throw err;
    bcrypt.hash(admin.password, salt, function (err, hash) {
      if (err) throw err;
      admin.password = hash;
      next();
    });
  });
});

adminSchema.pre('updateOne', function (next) {
  const admin = this;
  if (!admin.isModified('password')) return next();
  bcrypt.genSalt(SALT, function (err, salt) {
    if (err) throw err;
    bcrypt.hash(admin.password, salt, function (err, hash) {
      if (err) throw err;
      admin.password = hash;
      next();
    });
  });
});

adminSchema.methods.validatePassword = async function (pass) {
  return await bcrypt.compare(pass, this.password);
};

module.exports = mongoose.model('Admin', adminSchema);
