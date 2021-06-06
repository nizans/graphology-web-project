const { ErrorHandler } = require('../../utils/ErrorHandler');
const { Types, Content } = require('../models/Content');
// Content route
// /content

// GET /?page=[]&limit=[]
// Get contents with pagintation
exports.getContents = (req, res, next) => {
  const page = Number(req.query.page);
  const limit = Number(req.query.limit || 10);
  if (!page) throw new ErrorHandler(404, 'Missing page number');
  Content.find()
    .limit(limit)
    .skip(page * limit)
    .sort({ uploadDate: 1 })
    .then((contents) => {
      res.send(contents);
    })
    .catch((error) => {
      next(error);
    });
};

exports.getAllContents = (req, res, next) => {
  Content.find()
    .then((contents) => {
      res.send(contents);
    })
    .catch((error) => {
      next(error);
    });
};

// GET /:id
// Get content by id
exports.getContent = async (req, res, next) => {
  const id = req.params.id;

  if (!id) throw new ErrorHandler(404, 'Content id missing');

  Content.findById(id)
    .then((content) => {
      res.send(content);
    })
    .catch((error) => {
      next(error);
    });
};
