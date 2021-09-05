const ServiceService = require('./services.service');

exports.postService = async (req, res, next) => {
  const body = req.body;
  if (req.file) body.image = req.file.filename;
  try {
    const service = await ServiceService.create(body);
    res.status(201).send(service);
  } catch (error) {
    next(error);
  }
};

exports.getAllServices = async (req, res, next) => {
  try {
    res.send(await ServiceService.getAll());
  } catch (error) {
    next(error);
  }
};

exports.getServiceById = async (req, res, next) => {
  try {
    const id = req.params.id;
    res.send(await ServiceService.getById(id));
  } catch (error) {
    next(error);
  }
};

exports.deleteService = async (req, res, next) => {
  const id = req.params.id;
  try {
    res.status(204).send(await ServiceService.delete(id));
  } catch (error) {
    next(error);
  }
};
