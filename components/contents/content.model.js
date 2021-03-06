const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  title: { type: String, required: [true, 'Title is required'] },
  subtitle: String,
  images: [
    {
      full: { type: String, required: [true, 'Images required'] },
      thumb: { type: String, required: [true, 'Images required'] },
    },
  ],
  text: { type: String, required: [true, 'Text is required'] },
  uploadDate: { type: Date, default: Date.now() },
  publishDate: Date,
});

contentSchema.index({ title: 'text', text: 'text' }, { name: 'text index', weights: { title: 10, text: 5 } });

module.exports = mongoose.model('Content', contentSchema);
