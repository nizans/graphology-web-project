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
bookSchema.index(
  { title: 'text', description: 'text' },
  { name: 'text index', weights: { title: 10, description: 5 } }
);



module.exports = mongoose.model('Book', bookSchema);
