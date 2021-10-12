const { INVALID_REQUEST } = require('../components/error/error.constants');

class Controller {
  constructor(Service) {
    this.Service = Service;
  }

  async post(req, res, next) {
    if (!req.body) throw INVALID_REQUEST;
    try {
      res.status(201).json(await this.Service.create(req.body));
    } catch (error) {
      next(error);
    }
  }

  async get(req, res, next) {
    try {
      res.status(200).json(await this.Service.get(req.query));
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    const id = req.params.id;
    if (!id) throw INVALID_REQUEST;
    try {
      res.status(200).json(await this.Service.getById(id));
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    const id = req.params.id;
    try {
      await this.Service.delete(id);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    const id = req.params.id;
    const data = req.body;
    try {
      await this.Service.update(id, data);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
