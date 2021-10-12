const Service = require('../../base/Service');
const BookDAL = require('./book.DAL');
const { createBookValidation, updateBookValidation } = require('./books.validation');

class BookService extends Service {
  constructor() {
    super(BookDAL);
  }

  async create(data) {
    console.log(data);
    await createBookValidation.validateAsync(data);
    return await super.create(data);
  }

  async update(id, data) {
    await updateBookValidation.validateAsync(data);
    return await super.update(id, data);
  }
}

module.exports = new BookService();
