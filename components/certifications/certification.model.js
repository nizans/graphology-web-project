const mongoose = require('mongoose');
const certificationSchema = mongoose.Schema({
  images: [
    {
      full: { type: String, required: [true, 'Images required'] },
      thumb: { type: String, required: [true, 'Images required'] },
    },
  ],
  uploadDate: { type: Date, default: Date.now() },
});

module.exports = mongoose.model('Certification', certificationSchema);
