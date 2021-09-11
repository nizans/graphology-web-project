const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: [true, 'Title is required'] },
  author: { type: String, required: [true, 'Author is required'] },
  description: { type: String, required: [true, 'Description is required'] },
  uploadDate: { type: Date, default: Date.now() },
  publishDate: Date,
  images: [
    {
      full: { type: String, required: [true, 'Images required'] },
      thumb: { type: String, required: [true, 'Images required'] },
    },
  ],
});

module.exports = mongoose.model('Book', bookSchema);
