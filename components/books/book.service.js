const Service = require('../../base/Service');
const BookDAL = require('./book.DAL');

class BookService extends Service {
  constructor() {
    super(BookDAL);
  }
}

module.exports = new BookService();
