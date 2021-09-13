const mongoose = require('mongoose');
const { isURL } = require('validator');

const videoSchema = new mongoose.Schema({
  title: { type: String, required: [true, 'Video title is required'] },
  url: { type: String, required: [true, 'Video URL is required'], validate: [isURL, 'Invalid video URL'] },
  description: { type: String, required: [true, 'Video description is required'] },
  uploadDate: { type: Date, default: Date.now() },
  thumbnail: String,
});

videoSchema.index(
  { title: 'text', description: 'text' },
  { name: 'text index', weights: { title: 10, description: 5 } }
);

module.exports = mongoose.model('Video', videoSchema);
