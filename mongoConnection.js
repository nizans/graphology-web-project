const mongoose = require('mongoose');
const { MONGO_CONN_STRING } = require('./config/constants');

module.exports = async function connection() {
  try {
    await mongoose.connect(MONGO_CONN_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    mongoose.connection.on('error', err => {
      console.log(err);
      console.log('Mongoose connection error.');
    });
    console.log('Mongo connected!');
  } catch (err) {
    console.log(err);
    console.log('Mongoose connection error.');
  }
};
