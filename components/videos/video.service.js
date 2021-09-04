const VideoDal = require('./video.DAL');
const VIDEOS_PER_PAGE = 10;
class VideoService {
  async create(data) {
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
  async getPagination(page = 1) {
    return VideoDal.getPagination(page, VIDEOS_PER_PAGE);
  }
}

module.exports = new VideoService();
