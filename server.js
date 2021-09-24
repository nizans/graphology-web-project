const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const handleError = require('./components/error/handleError');
const cookieParser = require('cookie-parser');

// Middlewares
app.use(morgan('dev'));
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000', 'http://localhost:4000'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);
app.use(express.json());

// Static
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public', 'dist'))); // PRODUCTION

// Components routes
app.use('/api', require('./routes'));
app.use('/auth', require('./components/auth'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dist', 'index.html'));
}); // PRODUCTION

app.use((err, req, res, next) => {
  handleError(err, res);
});

module.exports = app;
