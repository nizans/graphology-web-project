const VideoController = require('./video.controller');
const ComponentRouter = require('../../base/ComponentRouter');



class VideoRouter extends ComponentRouter {
  constructor() {
    super(VideoController);
  }
}
module.exports = new VideoRouter().router;
