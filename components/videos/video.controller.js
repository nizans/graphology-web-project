const { ErrorHandler } = require('../../utils/ErrorHandler');
const VideoService = require('./video.service');
const videoDAL = require('./video.DAL');

exports.postVideo = async (req, res, next) => {
  console.log(req.body);
  const body = req.body;
  try {
    res.status(201).send(await videoDAL.add(body));
  } catch (error) {
    next(error);
  }
};

exports.getAllVideos = async (req, res, next) => {
  try {
    res.send(await VideoService.getAll());
  } catch (error) {
    next(error);
  }
};

exports.deleteVideo = async (req, res, next) => {
  const id = req.params.id;
  try {
    res.status(204).send(await VideoService.delete(id));
  } catch (error) {
    next(error);
  }
};
