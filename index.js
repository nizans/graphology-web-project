const app = require('./server');
const authApp = require('./authServer');
const connection = require('./mongoConnection');
require('dotenv').config();

const port = process.env.PORT || 4000;
const authServerPort = process.env.AUTH_SERVER_PORT || 4001;
connection();

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

authApp.listen(authServerPort, () => {
  console.log(`Auth Server listening at http://localhost:${authServerPort}`);
});
