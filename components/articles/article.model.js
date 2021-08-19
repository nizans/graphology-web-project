const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: { type: String, required: [true, 'Title is required'] },
  source: {
    from: { type: String, required: [true, 'Source from is required'] },
    url: { type: String, required: [true, 'Source URL is required'] },
  },
  image: { type: String },
  text: { type: String, required: [true, 'Text is required'] },
  publishDate: { type: Date, required: [true, 'Publish Date is required'] },
  uploadDate: { type: Date, default: Date.now() },
});

module.exports = mongoose.model('Article', articleSchema);
