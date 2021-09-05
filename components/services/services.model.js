const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: [true, 'Title is required'] },
  description: { type: String, required: [true, 'Description is required'] },
  image: String,
});

module.exports = mongoose.model('Service', serviceSchema);
