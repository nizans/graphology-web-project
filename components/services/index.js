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
    this.router.post('/', protectRoute, replaceAccessToken, uploadImage, this.Controller.post.bind(this.Controller));
  }
}
module.exports = new ServiceRouter().router;
