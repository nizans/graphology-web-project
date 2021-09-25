const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const handleError = require('./components/error/handleError');
const cookieParser = require('cookie-parser');
const fs = require('fs');

if (!fs.existsSync('./public')) {
  fs.mkdirSync('./public');
}
if (!fs.existsSync('./public/images')) {
  fs.mkdirSync('./public/images', { recursive: true });
}
if (!fs.existsSync('./public/thumbs')) {
  fs.mkdirSync('./public/thumbs', { recursive: true });
}

// Middlewares
app.use(morgan('dev'));
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000', 'http://localhost:4000', 'https://michal-doron.herokuapp.com'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);
app.use(express.json());

// Static
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'client', 'build')));

// Components routes
app.use('/api', require('./routes/routes'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.use((err, req, res, next) => {
  handleError(err, res);
});

module.exports = app;
