# Graphology Application

A **MERN** stack project. [Preview](https://michal-doron.herokuapp.com)

## Table of contents

- [Description](#description)
- [Preview](#preview)
- [Guided Tour](https://github.com/nizans/graphology-web-project/blob/main/client/GuidedTour.md)
- [Local Installation](#local-installation)
- [Technologies, Libraries, And Tools](#techLibTools)
- [Explanations](#explanations)
- [Things To Do](#thingsToDo)
- [Bibliography](#bibliography)

## Description

I created this project for [Michal Doron](https://he.wikipedia.org/wiki/%D7%9E%D7%99%D7%9B%D7%9C_%D7%93%D7%95%D7%A8%D7%95%D7%9F) as a graduation project from a practical software engineering degree in Shenkar college.

Michal is a professional graphologist who also writes articles, books, and records podcasts and videos. 
She needed a website to share content and offer services. Therefore the project needed to include a user-friendly and secure back-office to update and upload new articles, videos, services, and more.

I collaborated with a UX/UI designer, and we created a design that I programmed later with React.

The server side is built with NodeJS, Express, and using MongoDB.

Most of the technologies used in the project I learned on the go. 

The project design is highly inspired by [nodebestpractices](https://github.com/goldbergyoni/nodebestpractices) and [bulletproof-react](https://github.com/alan2207/bulletproof-react).


See [Guided Tour](https://github.com/nizans/graphology-web-project/blob/main/client/GuidedTour.md) to see samples from the app.


## Preview

[https://michal-doron.herokuapp.com](https://michal-doron.herokuapp.com)

To access the [admin section](https://michal-doron.herokuapp.com/admin/login) use these credentials:

`test@test.com`
`password`

## Local Installation

Run in root folder:

```
npm install
npm run install-client
npm run dev
```
<details><summary><strong>Required ENV variables</strong>
</summary>
  
The following env variables must be provided with a `.env` file on the root folder:
```
MONGO_CONN_STRING=
PORT=
JWT_ACCESS_KEY=
JWT_REFRESH_KEY=
TOKEN_COOKIE_MAX_AGE=
ACCESS_TOKEN_EXPIRATION=
REFRESH_TOKEN_EXPIRATION=
AWS_KEY=
AWS_SECRET=
AWS_BUCKET_NAME:
SENDGRID_API_KEY=
FROM_EMAIL_ADDRESS=
```
  
And with a `.env.local` file on the client folder:

```
REACT_APP_API_URL=<local_ip_address:4000>
```

</details>




Open new terminal on root folder:

```
npm run dev-client
```

Open [localhost:3000](http:localhost:3000)

> React will proxy the requests to the server (localhost:4000) when running in development.

> Note that authentication will not work as intended as it uses a secured cookie.
> Therefore it will work only on HTTPS servers.

<ins>Alternative:</ins> build the app and serve it from the node server instead of React development server.

Run in root folder:

```
npm install
npm run install-client
npm run build
npm run dev
```

Open [http:localhost:4000](http:localhost:4000)

## <a name="techLibTools"></a>Technologies, Libraries, And Tools

  <details><summary><strong>Clent side</strong></summary>

- [React](https://reactjs.org/)
- [react-query](https://react-query.tanstack.com/) - A very good way of making API calls in the app. It includes caching, devtools, and more.
- [react-router-dom](https://reactrouter.com/web/guides/quick-start)
- [react-transition-group](https://reactcommunity.org/react-transition-group/) - Used in the mobile navbar for animation, I might remove it because it only has a tiny part in the app.
- [tinymce](https://www.tiny.cloud/) & [tinymce-react](https://www.tiny.cloud/docs/integrations/react) - The app needed a way to upload written text and then parse it to HTML. I looked at many other WYSIWYG editors, but TinyMCE seems the most popular, and the documentation is excellent.
- [tailwind-css](https://tailwindcss.com/) - With Tailwind, it's possible to do almost any CSS without any CSS files, everything made with classes, but it is also very dynamic and configurable.
- [formik](https://formik.org/) - Formik just makes form validation very convenient.
- [yup](https://www.npmjs.com/package/yup) - Used with formik for validation.
- [react-slick](https://react-slick.neostack.com/) - A library for creating react sliders, which I used inside the [ResponsiveSlider](https://github.com/nizans/graphology-web-project/blob/main/client/src/components/common/ResponsiveSlider/ResponsiveSlider.js) component.
- [react-player](https://www.npmjs.com/package/react-player) - A video player that accepts multiple sources (e.g., facebook, youtube, soundcloud).
- [react-magnifier](https://www.npmjs.com/package/react-magnifier)
- [html-react-parser](https://www.npmjs.com/package/html-react-parser)
- [lodash.truncate](https://lodash.com/docs/4.17.15#truncate)
- [source-map-explorer](https://www.npmjs.com/package/source-map-explorer)
</details>

<details>
<summary>
<strong>Server side</strong>
</summary>

- [NodeJS](https://nodejs.org/en/docs/) - because JS is fun!
- [express](https://expressjs.com/) 
- [MongoDB](https://www.mongodb.com/) & [mongoose](https://mongoosejs.com/)
- [AWS S3](https://aws.amazon.com/s3/) & [aws-sdk](https://www.npmjs.com/package/aws-sdk) - I wanted to learn AWS, and they also provide a free plan which is enough for the current needs.
- [JWT](https://jwt.io/) & [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) 
- [joi](https://joi.dev/) - Used for object validation, very easy to use.
- [multer](https://www.npmjs.com/package/multer) - For uploading images, read more in [Image uploads](Explanations.md).
- [sharp](https://www.npmjs.com/package/sharp) - Used for creating a thumbnail copy of an image uploaded to the server.
- [nodemailer](https://nodemailer.com/about/)
- [sendgrid](https://sendgrid.com/) - Because they offer 100 daily emails for free, not limited in time.
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [morgan](https://www.npmjs.com/package/morgan) - Needed a simple logger.
- [cookie-parser](https://www.npmjs.com/package/cookie-parser)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [validator](https://www.npmjs.com/package/validator)
- [cors](https://www.npmjs.com/package/cors)</details>

<details><summary><strong>Tools</strong></summary>

- [Visual Studio Code](https://code.visualstudio.com/)
- [Adobe XD](https://www.adobe.com/il_en/products/xd.html)
- [Postman](https://www.postman.com/) 
- [Insomnia](https://insomnia.rest/)
- [Mongo Shell](https://docs.mongodb.com/v4.4/mongo/#:~:text=The%20mongo%20shell%20is%20an,well%20as%20perform%20administrative%20operations.&text=For%20information%20on%20the%20new,refer%20to%20the%20mongosh%20Documentation.) & [Mongo Compass](https://www.mongodb.com/products/compass)

</details>

## <a name="explanations"></a>Explanations
- [Server Side](Explanations.md)
- [Client Side](client/Explanations.md)

## <a name="thingsToDo"></a>Things To Do

- Write tests
- Document app features

## <a name="bibliography"></a>Bibliography

- [nodebestpractices](https://github.com/goldbergyoni/nodebestpractices)
- [bulletproof-react](https://github.com/alan2207/bulletproof-react)
