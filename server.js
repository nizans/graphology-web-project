const express = require('express');
const path = require('path');
const app = express();
const handleError = require('./components/error/handleError');
const createPublicFoldersOnLoad = require('./utils/createPublicFoldersOnLoad');
const setDefualtMiddlewares = require('./utils/setDefaultMiddlewares');

createPublicFoldersOnLoad();
setDefualtMiddlewares(app);

app.use(express.json());
app.use(express.static(path.join(__dirname, 'client', 'build')));

app.use(require('./routes/images.routes'));
app.use('/api', require('./routes/api.routes'));

app.get('*', (req, res, next) => {
  if (req.url.split('/')[1] === 'images' || req.url.split('/')[1] === 'thumbs') next();
  else res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.use((err, req, res, next) => {
  handleError(err, res);
});

module.exports = app;
