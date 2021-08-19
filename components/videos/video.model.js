const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const videoSchema = new mongoose.Schema({
  title: { type: String, required: [true, 'Title is required'] },
  url: { type: String, required: [true, 'Source URL is required'] },
  description: { type: String, required: [true, 'Description is required'] },
  uploadDate: { type: Date, default: Date.now() },
});

module.exports = mongoose.model('Video', videoSchema);
