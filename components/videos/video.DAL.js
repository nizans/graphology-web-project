const Video = require('./video.model');

const DAL = require('../../base/DAL');

class VideoDAL extends DAL {
  constructor() {
    super(Video, 'Video');
  }
}

// class VideoDal {
//   async add(data) {
//     const video = new Video(data);
//     const newVideo = await video.save();
//     return newVideo;
//   }

//   async getById(id) {
//     const video = await Video.findById(id);
//     if (!result) throw new ErrorHandle(404, `Video with ID: ${id} does not exists}`);
//     return video;
//   }

//   async getAll() {
//     const all = await Video.find();
//     return all;
//   }

//   async getPagination(page, limit, sortby) {
//     const count = await Video.countDocuments();
//     const data = {
//       pages: Math.ceil(count / limit),
//       page: page,
//       sortby: sortby,
//     };
//     if (data.page > data.pages) throw new ErrorHandle(404, 'The requested page does not exists');
//     const videos = await Video.find()
//       .limit(limit)
//       .skip(page * limit)
//       .sort(sortby);
//     data.payload = videos;
//     return data;
//   }

//   async delete(id) {
//     const result = await Video.findByIdAndDelete(id).select('_id title');
//     if (!result) throw new ErrorHandle(404, `Video with ID: ${id} does not exists}`);
//     return JSON.stringify(result);
//   }

//   async update(id, data) {
//     const updatedVideo = await Video.findByIdAndUpdate(id, data);
//     console.log(`Video ${id} updated`);
//     return updatedVideo;
//   }
// }

module.exports = new VideoDAL();
