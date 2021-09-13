const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: { type: String, required: [true, 'Title is required'] },
  sourceFrom: { type: String, required: [true, 'Source from is required'] },
  sourceURL: { type: String, required: [true, 'Source URL is required'] },
  images: [
    {
      full: { type: String, required: [true, 'Images required'] },
      thumb: { type: String, required: [true, 'Images required'] },
    },
  ],
  text: { type: String, required: [true, 'Text is required'] },
  publishDate: { type: Date, default: Date.now() },
  uploadDate: { type: Date, default: Date.now() },
});

articleSchema.index({ title: 'text', text: 'text' }, { name: 'text index', weights: { title: 10, text: 5 } });

module.exports = mongoose.model('Article', articleSchema);
