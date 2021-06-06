const { ErrorHandler } = require('../../utils/ErrorHandler');
const Book = require('../models/Book');

// Book route
// /book

// GET /
// Get all books
exports.getBooks = (req, res, next) => {
  Book.find()
    .then((books) => {
      res.status(200).send(books);
    })
    .catch((error) => {
      next(error);
    });
};

// GET /:id
// Get book by id
exports.getBook = (req, res, next) => {
  const id = req.params.id;

  if (!id) throw new ErrorHandler(404, 'Book id missing');
  
  Book.findById(id)
    .then((book) => {
      res.status(200).send(book);
    })
    .catch((error) => {
      next(error);
    });
};
