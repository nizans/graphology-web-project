const getVideoThumbnail = require('../../utils/getVideoThumbnail');
const Service = require('../../base/Service');
const ErrorHandle = require('../error/error.model');
const VideoDAL = require('./video.DAL');
class VideoService extends Service {
  constructor() {
    super(VideoDAL);
  }
  async create(data) {
    console.log(data);
    let thumbnailURL;
    thumbnailURL = await getVideoThumbnail(data.url);
    data.thumbnail = thumbnailURL;
    await super.create(data);
  }
}

module.exports = new VideoService();
