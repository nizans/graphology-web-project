const Content = require('../api/models/Content');
const lorem = `Quis enim amet elit ea consequat nisi et. Aliqua duis Lorem in excepteur irure sit quis laboris nostrud dolore occaecat reprehenderit eiusmod qui. Ipsum fugiat et reprehenderit incididunt Lorem duis voluptate.`;

(() => {
  for (let index = 0; index < 100; index++) {
    const randomImage = `https://picsum.photos/200/300`;
    let images = [];
    for (let x = 0; x < Math.round(Math.random() * 10); x++) {
      images.push(randomImage);
    }
    const body = {
      title: 'כותרת',
      type: 'article',
      summary: 'סאמריסאמריסאמר',
      mainBody: lorem,
      mediaSrc: null,
      images: images,
    };

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
        console.log('content added');
      })
      .catch((err) => {
        console.log(err);
      });
  }
})();
