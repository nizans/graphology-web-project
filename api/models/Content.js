const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const contentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    type: {
      type: String,
      enum: ['article, video, podcast'],
      default: 'article',
      required: [true, 'Type is required'],
    },
    uploadDate: {
      type: Date,
      default: Date.now,
    },
    summary: String,
    mainBody: String,
    mediaSrc: String,
    images: [String],
    slug: {
      type: String,
      slug: ['type', 'title'],
      unique: true,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model('Content', contentSchema);
