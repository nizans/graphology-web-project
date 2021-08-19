const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const contentSchema = new mongoose.Schema({
  title: { type: String, required: [true, 'Title is required'] },
  subtitle: String,
  image: { type: String },
  text: { type: String, required: [true, 'Text is required'] },
  uploadDate: { type: Date, default: Date.now() },
});

module.exports = mongoose.model('Content', contentSchema);
