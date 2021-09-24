const { PAGE_NOT_FOUND } = require('./components/error/error.constants');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const handleError = require('./components/error/handleError');

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

const authRouter = require('./components/auth');
app.use('/auth', authRouter);

app.use('*', (req, res, next) => {
  next(PAGE_NOT_FOUND);
});
app.use((err, req, res, next) => {
  handleError(err, res);
});

module.exports = app;
