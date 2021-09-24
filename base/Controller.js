
class Controller {
  constructor(Service) {
    this.Service = Service;
  }

  async post(req, res, next) {
    try {
      console.log(req.body);
      res.status(201).json(await this.Service.create(req.body));
    } catch (error) {
      next(error);
    }
  }

  async get(req, res, next) {
    try {
      res.json(await this.Service.get(req.query));
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    const id = req.params.id;
    try {
      res.status(200).json(await this.Service.getById(id));
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    const id = req.params.id;
    try {
      res.set('Content-Type', 'application/json');
      res.status(200).json(await this.Service.delete(id));
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    const id = req.params.id;
    try {
      res.status(204).json(await this.Service.update(id));
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
