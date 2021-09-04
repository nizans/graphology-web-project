const express = require('express'),
  path = require('path'),
  app = express(),
  cors = require('cors'),
  morgan = require('morgan'),
  handleError = require('./components/error/handleError');

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Components routes
const articles = require('./components/articles/index');
app.use('/api/articles', articles);
const videos = require('./components/videos/index');
app.use('/api/videos', videos);
const contents = require('./components/content/index');
app.use('/api/contents', contents);

app.use((err, req, res, next) => {
  handleError(err, res);
});

module.exports = app;
