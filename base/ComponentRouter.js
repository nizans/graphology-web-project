const express = require('express');

const uploadImages = require('../middleware/uploadImages');

// // /articles
// router.post('/', uploadImages, serviceController.postService);
// router.get('/', serviceController.getAllServices);
// router.get('/:id', serviceController.getServiceById);
// router.delete('/:id', serviceController.deleteService);
// module.exports = router;

class ComponentRouter {
  constructor(Controller) {
    this.Controller = Controller;
    this.router = express.Router();
    this.initRoutes()
  }

  initPost() {
    this.router.post('/', uploadImages, this.Controller.post.bind(this.Controller));
  }
  initGet() {
    this.router.get('/', this.Controller.get.bind(this.Controller));
  }
  initgetById() {
    this.router.get('/:id', this.Controller.getById.bind(this.Controller));
  }
  initDelete() {
    this.router.delete('/:id', this.Controller.delete.bind(this.Controller));
  }
  initUpdate() {
    this.router.put('/:id', this.Controller.update.bind(this.Controller));
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
