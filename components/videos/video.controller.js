const VideoService = require('./video.service');
const videoDAL = require('./video.DAL');

exports.postVideo = async (req, res, next) => {
  const body = req.body;
  try {
    res.status(201).send(await VideoService.create(body));
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

exports.getVideosPagination = async (req, res, next) => {
  let { page, limit, sortby } = req.query;
  page = parseInt(page);
  limit = parseInt(limit);
  if (!sortby) sortby = undefined;
  if (Number.isNaN(page)) page = undefined;
  if (Number.isNaN(limit)) limit = undefined;
  try {
    res.send(await VideoService.getPagination(page, limit, sortby));
  } catch (error) {
    next(error);
  }
};

exports.getLatestVideos = async (req, res, next) => {
  const limit = parseInt(req.query.limit);

  try {
    res.send(await VideoService.getLatestVideos(limit || 5));
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
