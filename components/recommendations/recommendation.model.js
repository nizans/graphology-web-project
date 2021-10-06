const mongoose = require('mongoose');

const recommendationSchema = new mongoose.Schema({
  text: { type: String, required: [true, 'Text is required'] },
  uploadDate: { type: Date, default: Date.now() },
  name: { type: String },
});

module.exports = mongoose.model('Recommendation', recommendationSchema);
