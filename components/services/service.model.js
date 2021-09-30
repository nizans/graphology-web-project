const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: [true, 'Title is required'] },
  description: { type: String, required: [true, 'Description is required'] },
  image: {
    full: String,
    thumb: String,
  },
});

serviceSchema.index(
  { title: 'text', description: 'text' },
  { name: 'text index', weights: { title: 10, description: 5 } }
);

module.exports = mongoose.model('Service', serviceSchema);
