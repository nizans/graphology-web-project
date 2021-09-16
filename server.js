const express = require('express'),
  path = require('path'),
  app = express(),
  cors = require('cors'),
  morgan = require('morgan'),
  handleError = require('./components/error/handleError');

// Middlewares
app.use(morgan('----------------server-------------------\n[:date[web]]'));
app.use(morgan('dev'));
app.use(morgan('-----------------------------------------'));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Components routes
app.use('/api', require('./routes'));

app.use((err, req, res, next) => {
  handleError(err, res);
});

module.exports = app;
