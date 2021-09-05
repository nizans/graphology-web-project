const getVideoThumbnail = require('../../utils/getVideoThumbnail');
const VideoDal = require('./video.DAL');
const VIDEOS_PER_PAGE = 10;
const SORT_BY = `-uploadDate`;
class VideoService {
  async create(data) {
    let thumbnailURL;
    try {
      thumbnailURL = await getVideoThumbnail(data.url);
    } catch (error) {
      console.log('Unable to get thumbnail');
    }
    console.log(thumbnailURL);
    data.thumbnail = thumbnailURL;
    return await VideoDal.add(data);
  }
  async delete(id) {
    return await VideoDal.delete(id);
  }
  async update(id) {
    return await VideoDal.update(id);
  }
  async getById(id) {
    return await VideoDal.getById(id);
  }
  async getAll() {
    return await VideoDal.getAll();
  }
  async getPagination(page = 0, limit = VIDEOS_PER_PAGE, sortby = SORT_BY) {
    return await VideoDal.getPagination(page, limit, sortby);
  }

  async getLatestVideos(numOfVideos = VIDEOS_PER_PAGE) {
    return await VideoDal.getLatest(numOfVideos);
  }
}

module.exports = new VideoService();
