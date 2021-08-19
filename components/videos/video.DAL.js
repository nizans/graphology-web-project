const Video = require('./video.model');

class VideoDal {
  async add(data) {
    console.log(data);
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
      console.log(video);
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

  async delete(id) {
    try {
      const result = await Video.findByIdAndDelete(id);
      console.log(result);
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
