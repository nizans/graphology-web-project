const contactService = require('./contact.service');

class ContactController {
  constructor() {}

  contact = async (req, res, next) => {
    try {
      await contactService.contact(req.body);
      res.status(200).json({});
    } catch (error) {
      next(error);
    }
  };

  orderBook = async (req, res, next) => {
    try {
      await contactService.orderBook(req.body);
      res.status(200).json({});
    } catch (error) {
      next(error);
    }
  };
}

module.exports = new ContactController();
