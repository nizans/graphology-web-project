const app = require('./server');
const connection = require('./lib/mongoConnection');
const { PORT } = require('./config/constants');

connection();

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
