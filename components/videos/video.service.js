const getVideoThumbnail = require('../../utils/getVideoThumbnail');
const Service = require('../../base/Service');
const ErrorHandle = require('../error/error.model');
const VideoDAL = require('./video.DAL');
const { createVideoValidation, updateVideoValidation } = require('./videos.validation');
class VideoService extends Service {
  constructor() {
    super(VideoDAL);
  }
  async create(data) {
    await createVideoValidation.validateAsync(data);
    data.thumbnail = await getVideoThumbnail(data.url);
    return await super.create(data);
  }

  async update(id, data) {
    await updateVideoValidation.validateAsync(data);
    if (data.url) data.thumbnail = await getVideoThumbnail(data.url);
    return await super.update(id, data);
  }
}

module.exports = new VideoService();
