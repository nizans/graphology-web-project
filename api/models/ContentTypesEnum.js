const ContentTypesEnum = Object.freeze({ Artice: 1, Video: 2, Podcast: 3 });
const enumArray = [];
Object.entries(ContentTypesEnum).forEach(([key, value]) => {
  enumArray.push(value);
});

module.exports = { ContentTypesEnum, enumArray };
