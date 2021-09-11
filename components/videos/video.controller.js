const VideoService = require('./video.service');
const Controller = require('../../base/Controller');

class VideoController extends Controller {
  constructor() {
    super(VideoService);
  }
}
module.exports = new VideoController();
