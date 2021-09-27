const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const handleError = require('./components/error/handleError');
const cookieParser = require('cookie-parser');
const fs = require('fs');
const { getFileStream } = require('./lib/s3');

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
app.use(express.static(path.join(__dirname, 'client', 'build')));
// app.use(express.static(path.join(__dirname, 'public')));

app.get('/images/:name', (req, res, next) => {
  try {
    const name = req.params.name;
    const readStream = getFileStream('images/' + name);
    readStream.pipe(res);
  } catch (error) {
    next(error);
  }
});
app.get('/thumbs/:name', (req, res, next) => {
  try {
    const name = req.params.name;
    const readStream = getFileStream('thumbs/' + name);
    readStream.pipe(res);
  } catch (error) {
    next(error);
  }
});

app.use('/api', require('./routes/api.routes'));

app.get('*', (req, res, next) => {
  if (req.url.split('/')[1] === 'images' || req.url.split('/')[1] === 'thumbs') next();
  else res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.use((err, req, res, next) => {
  handleError(err, res);
});

module.exports = app;
