const app = require('./server'),
  connection = require('./mongoConnection');
require('dotenv').config();

const port = process.env.PORT || 4000;
connection();
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
