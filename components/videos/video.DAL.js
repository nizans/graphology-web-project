const Video = require('./video.model');
const ErrorHandle = require('../error/error.model');

class VideoDal {
  async add(data) {
    try {
      const video = new Video({
        title: data.title,
        url: data.url,
        description: data.description,
      });
      const newVideo = await video.save();
      return newVideo;
    } catch (error) {
      throw error;
    }
  }

  async getById(id) {
    try {
      const video = await Video.findById(id);
    } catch (error) {
      throw error;
    }
  }

  async getAll() {
    try {
      const all = await Video.find();
      return all;
    } catch (error) {
      throw error;
    }
  }

  async getPagination(page, limit) {
    try {
      const count = await Video.countDocuments();
      const data = {
        pages: Math.ceil(count / limit),
        page: page,
      };
      if (data.page >= data.pages) throw new ErrorHandle(404, 'The requested page does not exists');
      const videos = await Video.find()
        .limit(limit)
        .skip(page * limit)
        .sort('-uploadDate');
      data.payload = videos;

      return data;
    } catch (error) {
      throw error;
    }
  }

  async delete(id) {
    try {
      const result = await Video.findByIdAndDelete(id);

      if (!result) throw new ErrorHandler({ statusCode: 404, message: 'Video not found' });
      return `Video ${id} deleted`;
    } catch (error) {
      throw error;
    }
  }

  async update(id, data) {
    try {
      const updatedVideo = await Video.findByIdAndUpdate(id, data);
      console.log(`Video ${id} updated`);
      return updatedVideo;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new VideoDal();
