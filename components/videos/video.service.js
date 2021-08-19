const VideoDal = require('./video.DAL');

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
    return await videoDal.getAll();
  }
}

module.exports = new VideoService();
