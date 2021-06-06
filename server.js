const express = require('express'),
  app = express(),
  cors = require('cors'),
  morgan = require('morgan'),
  { handleError } = require('./utils/ErrorHandler');
  
// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routers
const adminRoutes = require('./api/routes/admin');
app.use('/admin', adminRoutes);

const contentRoutes = require('./api/routes/contents');
app.use('/contents', contentRoutes);

const bookRoutes = require('./api/routes/book');
app.use('/book', bookRoutes);

app.use((err, req, res, next) => {
  handleError(err, res);
});

module.exports = app;
