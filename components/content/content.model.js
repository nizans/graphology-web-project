const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  title: { type: String, required: [true, 'Title is required'] },
  subtitle: String,
  image: String,
  text: { type: String, required: [true, 'Text is required'] },
  uploadDate: { type: Date, default: Date.now() },
  publishDate: Date,
});

module.exports = mongoose.model('Content', contentSchema);
