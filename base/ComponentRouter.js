const express = require('express');
const { authenticate } = require('../middleware/auth');

const uploadImages = require('../middleware/uploadImages');

class ComponentRouter {
  constructor(Controller) {
    this.Controller = Controller;
    this.router = express.Router();
    this.initRoutes();
  }

  initPost() {
    this.router.post('/', authenticate, uploadImages, this.Controller.post.bind(this.Controller));
  }
  initGet() {
    this.router.get('/', this.Controller.get.bind(this.Controller));
  }
  initgetById() {
    this.router.get('/:id', this.Controller.getById.bind(this.Controller));
  }
  initDelete() {
    this.router.delete('/:id', authenticate, this.Controller.delete.bind(this.Controller));
  }
  initUpdate() {
    this.router.put('/:id', authenticate, this.Controller.update.bind(this.Controller));
  }

  initRoutes() {
    this.initPost();
    this.initGet();
    this.initDelete();
    this.initUpdate();
    this.initgetById();
  }
}

module.exports = ComponentRouter;
