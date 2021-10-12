const express = require('express');
const { protectRoute } = require('../middleware/protectRoute');
const { replaceAccessToken } = require('../middleware/replaceAccessToken');

const { uploadImages } = require('../middleware/uploadImages');

class ComponentRouter {
  constructor(Controller) {
    this.Controller = Controller;
    this.router = express.Router();
    this.initRoutes();
  }

  initPost() {
    if (process.env.NODE_ENV === 'development')
      this.router.post('/', uploadImages, this.Controller.post.bind(this.Controller));
    else
      this.router.post('/', protectRoute, replaceAccessToken, uploadImages, this.Controller.post.bind(this.Controller));
  }
  initGet() {
    this.router.get('/', this.Controller.get.bind(this.Controller));
  }
  initGetById() {
    this.router.get('/:id', this.Controller.getById.bind(this.Controller));
  }
  initDelete() {
    if (process.env.NODE_ENV === 'development')
      this.router.delete('/:id', this.Controller.delete.bind(this.Controller));
    else this.router.delete('/:id', protectRoute, replaceAccessToken, this.Controller.delete.bind(this.Controller));
  }

  initUpdate() {
    if (process.env.NODE_ENV === 'development')
    this.router.put('/:id', uploadImages, this.Controller.update.bind(this.Controller));
    else
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
    this.initGetById();
  }
}

module.exports = ComponentRouter;
