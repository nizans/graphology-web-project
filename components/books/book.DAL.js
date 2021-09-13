const DAL = require('../../base/DAL');
const Book = require('./book.model');

class BookDAL extends DAL {
  constructor() {
    super(Book, 'Book');
  }
}

module.exports = new BookDAL();
