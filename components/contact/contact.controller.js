const contactService = require('./contact.service');

class ContactController {
  constructor() {}

  contact = async (req, res, next) => {
    try {
      res.status(200).json(contactService.contact(req.body));
    } catch (error) {
      next(error);
    }
  };

  orderBook = async (req, res, next) => {
    try {
      res.status(200).json(contactService.orderBook(req.body));
    } catch (error) {
      next(error);
    }
  };
}

module.exports = new ContactController();
