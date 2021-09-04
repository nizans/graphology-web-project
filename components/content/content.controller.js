const ContentService = require('./content.service');

exports.postContent = async (req, res, next) => {
  const body = req.body;

  if (req.file) body.filename = req.file.filename;
  try {
    const s = await ContentService.create(body);

    res.status(201).send(s);
  } catch (error) {
    next(error);
  }
};

exports.getAllContents = async (req, res, next) => {
  try {
    res.send(await ContentService.getAll());
  } catch (error) {
    next(error);
  }
};

exports.getContentsPagination = async (req, res, next) => {
  const page = req.query.page;

  try {
    res.send(await ContentService.getPagination(page));
  } catch (error) {
    next(error);
  }
};

exports.deleteContent = async (req, res, next) => {
  const id = req.params.id;
  try {
    res.status(204).send(await ContentService.delete(id));
  } catch (error) {
    next(error);
  }
};
