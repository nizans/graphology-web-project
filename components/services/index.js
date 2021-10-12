const ServiceController = require('./service.controller');
const ComponentRouter = require('../../base/ComponentRouter');
const { uploadImage } = require('../../middleware/uploadImages');
const { protectRoute } = require('../../middleware/protectRoute');
const { replaceAccessToken } = require('../../middleware/replaceAccessToken');

class ServiceRouter extends ComponentRouter {
  constructor() {
    super(ServiceController);
    super.initRoutes();
  }

  initPost() {
    if (process.env.NODE_ENV === 'development')
      this.router.post('/', uploadImage, this.Controller.post.bind(this.Controller));
    else
      this.router.post('/', protectRoute, replaceAccessToken, uploadImage, this.Controller.post.bind(this.Controller));
  }

  initUpdate() {
    if (process.env.NODE_ENV === 'development')
      this.router.put('/:id', uploadImage, this.Controller.update.bind(this.Controller));
    else
      this.router.put(
        '/:id',
        protectRoute,
        replaceAccessToken,
        uploadImage,
        this.Controller.update.bind(this.Controller)
      );
  }
}
module.exports = new ServiceRouter().router;
