const app = require('./server');
require('dotenv').config();
const mongoose = require('mongoose');

const port = process.env.PORT || 4000;
const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

mongoose
  .connect(process.env.DB_URI, mongoOptions)
  .then(() => {
    console.log('Mongo Connected');
    app.listen(port, () => {
      console.log(`Server listening at http://localhost:${port}`);
    });
  })
  .catch((err) => console.error(err));
