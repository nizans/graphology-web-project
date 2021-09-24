const app = require('./server');
const connection = require('./mongoConnection');
require('dotenv').config();

const port = process.env.PORT || 4000;
const authServerPort = process.env.AUTH_SERVER_PORT || 4001;
connection();

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

