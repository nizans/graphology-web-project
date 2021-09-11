const Controller = require('../../base/Controller');
const BookService = require('./book.service');

class BookController extends Controller {
  constructor() {
    super(BookService);
  }
}
module.exports = new BookController();
