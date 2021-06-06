const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const bookSchema = new mongoose.Schema(
  {
    uploadDate: {
      type: Date,
      default: Date.now,
    },
    quantityInStock: {
      type: Number,
      min: [0, 'Cannot set negetive stock quantity'],
      default: 0,
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    author: {
      type: String,
      required: [true, 'Author is required'],
    },
    description: {
      type: String,
    },
    images: {
      type: [String],
    },
    slug: {
      type: String,
      slug: ['book', 'name'],
      unique: true,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model('Book', bookSchema);
