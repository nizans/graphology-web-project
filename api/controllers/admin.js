const Content = require('../models/Content');
const Book = require('../models/Book');
const { ErrorHandler } = require('../../utils/ErrorHandler');

// admin route
// /admin

// POST /content
exports.postAddContent = (req, res, next) => {
  const body = req.body;

  if (!body.title) throw new ErrorHandler(404, 'Title missing');

  const content = new Content({
    title: body.title,
    type: body.type,
    summary: body.summary,
    mainBody: body.mainBody,
    mediaSrc: body.mediaSrc,
    images: body.images,
  });

  content
    .save()
    .then((newContent) => {
      res.send(newContent);
    })
    .catch((error) => {
      next(error);
    });
};

// DELETE /content/:id
exports.deleteContent = (req, res, next) => {
  const id = req.params.id;
  if (!id) throw new ErrorHandler(404, 'Content id missing');
  Content.findByIdAndDelete(id, { projection: { _id: 0 } })
    .then(() => {
      console.log(`Content ${id} deleted.`);
      res.status(200).send(`Content ${id} deleted.`);
    })
    .catch((error) => {
      next(error);
    });
};

// PATCH /content/:id
exports.patchUpdateContent = (req, res, next) => {
  const id = req.params.id;
  const body = req.body;
  const update = {};

  if (!id) throw new ErrorHandler(404, 'Content id missing');
  if (update == {}) throw new ErrorHandler(404, 'Nothing to update');

  if ('title' in body) update.title = body.title;
  if ('type' in body) update.type = body.type;
  if ('summary' in body) update.summary = body.summary;
  if ('mainBody' in body) update.mainBody = body.mainBody;
  if ('mediaSrc' in body) update.mediaSrc = body.mediaSrc;
  if ('images' in body) uppdate.images = body.images;

  Content.findByIdAndUpdate(id, update)
    .then((updatedContet) => {
      res.status(200).send(updatedContet);
      console.log('Content updated');
    })
    .catch((error) => {
      next(error);
    });
};

// POST /book
exports.postAddBook = (req, res, next) => {
  const body = req.body;
  const book = new Book({
    name: body.name,
    author: body.author,
    description: body.description,
    images: body.images,
    quantityInStock: body.quantityInStock,
  });

  book
    .save()
    .then((newBook) => {
      res.send(newBook);
    })
    .catch((error) => {
      next(error);
    });
};

// DELETE /book/:id
exports.deleteBook = (req, res, next) => {
  const id = req.params.id;
  Book.findByIdAndDelete(id, { projection: { _id: 0 } })
    .then(() => {
      console.log(`Book ${id} deleted.`);
      res.status(200).send(`Book ${id} deleted.`);
    })
    .catch((error) => {
      next(error);
    });
};

// PATCH /book/:id
exports.patchUpdateBook = (req, res, next) => {
  const id = req.params.id;
  const body = req.body;
  const update = {};
  if ('name' in body) update.name = body.name;
  if ('author' in body) update.author = body.author;
  if ('description' in body) update.description = body.description;
  if ('quantityInStock' in body) update.quantityInStock = body.quantityInStock;
  if ('images' in body) uppdate.images = body.images;

  Content.findByIdAndUpdate(id, update)
    .then((updatedBook) => {
      res.status(200).send(updatedBook);
      console.log('Book updated');
    })
    .catch((error) => {
      next(error);
    });
};
