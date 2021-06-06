const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const serviceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    description: {
      type: String,
    },
    images: [String],
    slug: {
      type: String,
      slug: ['service', 'name'],
      unique: true,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model('Service', serviceSchema);
