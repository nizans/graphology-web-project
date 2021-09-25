const app = require('./server');
const connection = require('./mongoConnection');
const { PORT } = require('./config/constants');
require('dotenv').config();
connection();

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
