const BookController = require('./book.controller');
const ComponentRouter = require('../../base/ComponentRouter');


class BookRouter extends ComponentRouter {
  constructor() {
    super(BookController);
    super.initRoutes();
  }
}

module.exports = new BookRouter().router;
