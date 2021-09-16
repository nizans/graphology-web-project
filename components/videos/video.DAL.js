const Video = require('./video.model');

const DAL = require('../../base/DAL');

class VideoDAL extends DAL {
  constructor() {
    super(Video, 'Video');
  }
}

module.exports = new VideoDAL();
