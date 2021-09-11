class Controller {
  constructor(Service) {
    this.Service = Service;
  }

  async post(req, res, next) {
    try {
      res.status(201).send(await this.Service.create(req.body));
    } catch (error) {
      next(error);
    }
  }

  async get(req, res, next) {
    try {
      res.send(await this.Service.get(req.query));
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    const id = req.params.id;
    try {
      res.send(await this.Service.getById(id));
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    const id = req.params.id;
    try {
      res.status(204).send(await this.Service.delete(id));
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    const id = req.params.id;
    try {
      res.status(204).send(await this.Service.update(id));
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
