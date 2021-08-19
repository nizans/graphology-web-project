const mongoose = require('mongoose');

module.exports = async function connection() {
  try {
    await mongoose.connect(process.env.DB_CONN_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    mongoose.connection.on('error', err => {
      console.log('Mongoose Error');
      console.log(err);
    });
    console.log('Mongo Connected');
  } catch (err) {
    console.err(err);
    console.log('Connection to Mongo faild.');
  }
};
