# Graphology Website

### A MERN stack project in final stages. Quick preview [here](https://dashboard.heroku.com/apps/michal-doron)

## <ins>Table of contents:</ins>

- [Description](#description)
- [Preview](#preview)
- [Local Installation](#local-installation)
- [Technologies & Libraries Used](#technologies-&-libraries-used:)

## <ins>Description:</ins>

This project was created for [Michal Doron](https://he.wikipedia.org/wiki/%D7%9E%D7%99%D7%9B%D7%9C_%D7%93%D7%95%D7%A8%D7%95%D7%9F) as a graduation project from a practical software engineering degree in Shenkar college.

## <ins>[Preview:](https://dashboard.heroku.com/apps/michal-doron)</ins>

A [Heroku app](https://dashboard.heroku.com/apps/michal-doron) that automatically deploys the main branch of this repository.

To manipulate the content in the website, connect to the [admin section](https://michal-doron.herokuapp.com/admin/login) with these credentials:

`test@test.com`

`password`

## <ins>Local Installation:</ins>

Run in root folder:

```
npm install
npm run install-client
npm run dev
```

New terminal on root folder:

```
npm run dev-client
```

Open [localhost:3000](http:localhost:3000)

> The react app will proxy the requests to the server (localhost:4000).

> Note that authentication will not work as intended as it uses a secured cookie.
> Therefore it will work only on HTTPS servers.

<ins>Alternative:</ins> build the app and server from the node server instead of React development server.

Run in root folder:

```
npm install
npm run install-client
npm run build
npm run dev
```

Open [http:localhost:4000](http:localhost:4000)

## <ins>Technologies & Libraries Used:</ins>

### <ins>Client side:</ins>

- [React](https://reactjs.org/)
- [react-query](https://react-query.tanstack.com/)
- [react-router-dom](https://reactrouter.com/web/guides/quick-start)
- [react-transition-group](https://reactcommunity.org/react-transition-group/)
- [tinymce](https://www.tiny.cloud/) & [tinymce-react](https://www.tiny.cloud/docs/integrations/react)
- [tailwind-css](https://tailwindcss.com/)
- [formik](https://formik.org/)
- [yup](https://www.npmjs.com/package/yup)
- [react-slick](https://react-slick.neostack.com/)
- [react-player](https://www.npmjs.com/package/react-player)
- [react-magnifier](https://www.npmjs.com/package/react-magnifier)
- [html-react-parser](https://www.npmjs.com/package/html-react-parser)
- [lodash.truncate](https://lodash.com/docs/4.17.15#truncate)
- [source-map-explorer](https://www.npmjs.com/package/source-map-explorer)

### <ins>Server side:</ins>

- [NodeJS](https://nodejs.org/en/docs/)
- [express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) & [mongoose](https://mongoosejs.com/)
- [AWS S3](https://aws.amazon.com/s3/) & [aws-sdk](https://www.npmjs.com/package/aws-sdk)
- [JWT](https://jwt.io/) & [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [joi](https://joi.dev/)
- [multer](https://www.npmjs.com/package/multer)
- [sharp](https://www.npmjs.com/package/sharp)
- [nodemailer](https://nodemailer.com/about/)
- [sendgrid](https://sendgrid.com/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [morgan](https://www.npmjs.com/package/morgan)
- [cookie-parser](https://www.npmjs.com/package/cookie-parser)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [validator](https://www.npmjs.com/package/validator)
- [cors](https://www.npmjs.com/package/cors)

