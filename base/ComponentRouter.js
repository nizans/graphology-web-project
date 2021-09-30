const express = require('express');
const { protectRoute } = require('../middleware/protectRoute');
const { replaceAccessToken } = require('../middleware/replaceAccessToken');

const { uploadImages, uploadImage } = require('../middleware/uploadImages');

class ComponentRouter {
  constructor(Controller) {
    this.Controller = Controller;
    this.router = express.Router();
    this.initRoutes();
  }

  initPost() {
    this.router.post('/', protectRoute, replaceAccessToken, uploadImages, this.Controller.post.bind(this.Controller));
  }
  initGet() {
    this.router.get('/', this.Controller.get.bind(this.Controller));
  }
  initgetById() {
    this.router.get('/:id', this.Controller.getById.bind(this.Controller));
  }
  initDelete() {
    this.router.delete('/:id', protectRoute, replaceAccessToken, this.Controller.delete.bind(this.Controller));
  }

  initUpdate() {
    this.router.put(
      '/:id',
      protectRoute,
      replaceAccessToken,
      uploadImages,
      this.Controller.update.bind(this.Controller)
    );
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
