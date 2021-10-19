## How Stuff Works

<details>
<summary>
API Design
</summary>

The server [routes](https://github.com/nizans/graphology-web-project/blob/122ab1df901213c8e9f5c6c1a52aef1f82275614/server.js#L16) all `/api` requests to the [API router](https://github.com/nizans/graphology-web-project/blob/main/routes/api.routes.js#L2).<br>
The API Router routes the requests to the desired component router. If route is invalid passes an error to the next middleware.<br>
The component router passes the request to the component controller, which calls the component service and passes any data if needed, then waits for the service to respond or throw an error.<br>
The service first validates the data with [joi](https://joi.dev/), and throws an error if data is invalid in order to fail fast before reaching the data layer. If data was valid, then the service handles any necessary business logic and calls the component DAL, passing data if needed.<br>
The DAL communicates with the DB, sending and/or receiving data, and returns the result to the service.<br>
The controller then responds to the client or passes the error to the next middleware.<br><br>

<img src="./docs/diagrams/API design.png" />

> See [Component Design](#component-design), [Error Handleing](#error-handleing)

</details>

<details>
<summary>
Error Handling
</summary>

The error handling in the server comprises the [ErrorHandle class](https://github.com/nizans/graphology-web-project/blob/122ab1df901213c8e9f5c6c1a52aef1f82275614/components/error/error.model.js#L1), a [middleware](https://github.com/nizans/graphology-web-project/blob/122ab1df901213c8e9f5c6c1a52aef1f82275614/components/error/handleError.js#L4), a [controller](https://github.com/nizans/graphology-web-project/blob/main/components/error/error.controller.js), and the [constants file](https://github.com/nizans/graphology-web-project/blob/main/components/error/error.constants.js).<br>

The ErrorHandle class extends the Error object and includes the fields:

- statusCode: the HTTP status code
- client message: a message to send to the client
- message: the original error message or a message for the server usage
- isOperational: is the error an [operational error](https://github.com/goldbergyoni/nodebestpractices/blob/master/sections/errorhandling/operationalvsprogrammererror.md)?

The error handling middleware is located as the [last middleware of the server](https://github.com/nizans/graphology-web-project/blob/122ab1df901213c8e9f5c6c1a52aef1f82275614/server.js#L24), so if an error occurs anywhere in the app, it should reach the middleware.<br>
It then [checks](https://github.com/nizans/graphology-web-project/blob/122ab1df901213c8e9f5c6c1a52aef1f82275614/components/error/handleError.js#L5) if the error is an instance of ErrorHandle, and sends the response.<br>
Otherwise, it passes the error to the error controller and then responds with the returned error.

The error controller receives an error object and returns a corresponding ErrorHandle instance containing a message and a status code to the middleware.<br>
For example, if the [controller](https://github.com/nizans/graphology-web-project/blob/122ab1df901213c8e9f5c6c1a52aef1f82275614/components/error/error.controller.js#L5) receives a [mongoose validation error](https://github.com/nizans/graphology-web-project/blob/122ab1df901213c8e9f5c6c1a52aef1f82275614/components/error/mongo.error.controller.js#L28), it calls the [handleValidationError](https://github.com/nizans/graphology-web-project/blob/122ab1df901213c8e9f5c6c1a52aef1f82275614/components/error/mongo.error.controller.js#L11) method and returns the ErrorHandle instance<br>
If the controller did not recognize the error, it would return an [ErrorHandle with a 500 status code and an 'unknown server error'](https://github.com/nizans/graphology-web-project/blob/122ab1df901213c8e9f5c6c1a52aef1f82275614/components/error/mongo.error.controller.js#L38) response.

The error constants file contains some ready-to-use ErrorHandle instances.<br>
For example, an [incorrect email error](https://github.com/nizans/graphology-web-project/blob/122ab1df901213c8e9f5c6c1a52aef1f82275614/components/error/error.constants.js#L24) when an admin tries to [log in](https://github.com/nizans/graphology-web-project/blob/122ab1df901213c8e9f5c6c1a52aef1f82275614/components/admin/admin.DAL.js#L13).<br>
The constants file was created to reduce code repetition and remove undesired and confusing code around the app.<br>
For example, without the constants file, extra code and confusing strings:

```javascript
  async login(email, password) {
    const admin = await this.Model.findOne({ email });
    if (!admin) new ErrorHandle(401, 'Email does not exists', null, 'אימייל לא קיים', true);
    if (!(await admin.validatePassword(password))) new ErrorHandle(401, 'Incorrect password', null, 'סיסמא שגויה', true);
    return await this.Model.findOne({ email }).select('name email _id');
  }
```

With the constants file, a cleaner, more readable code:

```javascript
  async login(email, password) {
    const admin = await this.Model.findOne({ email });
    if (!admin) throw EMAIL_NOT_EXISTS;
    if (!(await admin.validatePassword(password))) throw LOGIN_INCORRECT_PASS;
    return await this.Model.findOne({ email }).select('name email _id');
  }
```

This design allows controlling all of the errors in one place and enabling easy changes and control of the response.

<img src="./docs/diagrams/Error Handler.png" />

</details>

<details>
<summary>
<a name="component-design"></a>Component Design
</summary>

A component comprises some or all of the router, controller, service, DAL, and model layers. Inspired by [nodebestpractices](https://github.com/goldbergyoni/nodebestpractices/blob/master/sections/projectstructre/breakintcomponents.md)<br>
To minimize code duplication, I created [classes](https://github.com/nizans/graphology-web-project/tree/main/base) for each of these layers:

- [ComponentRouter](https://github.com/nizans/graphology-web-project/blob/main/base/ComponentRouter.js): routes the request to the correct controller ([e.g.](https://github.com/nizans/graphology-web-project/blob/122ab1df901213c8e9f5c6c1a52aef1f82275614/base/ComponentRouter.js#L18))
- [Controller](https://github.com/nizans/graphology-web-project/blob/122ab1df901213c8e9f5c6c1a52aef1f82275614/base/Controller.js#L3): Call the service and pass any data. Then send back the response or passes the caught error (e.g., [post](https://github.com/nizans/graphology-web-project/blob/122ab1df901213c8e9f5c6c1a52aef1f82275614/base/Controller.js#L8)).
- [Service](https://github.com/nizans/graphology-web-project/blob/122ab1df901213c8e9f5c6c1a52aef1f82275614/base/Service.js#L7): handle business logic, call DAL (e.g., [deleting images after an item was deleted](https://github.com/nizans/graphology-web-project/blob/122ab1df901213c8e9f5c6c1a52aef1f82275614/base/Service.js#L21)).
- [DAL](https://github.com/nizans/graphology-web-project/blob/122ab1df901213c8e9f5c6c1a52aef1f82275614/base/DAL.js#L13): communicating with MongoDB using [mongoose](https://mongoosejs.com/).

Every component inherits the needed base class and overrides and adds any required fields and methods.<br>
For example, the [admin component](https://github.com/nizans/graphology-web-project/tree/main/components/admin) has very different requirements than most of the other components, so there are many overrides (e.g., [admin.service](https://github.com/nizans/graphology-web-project/blob/122ab1df901213c8e9f5c6c1a52aef1f82275614/components/admin/admin.service.js#L24)),
but the articles, books, and contents components use the exact methods (e.g. [books.DAL](https://github.com/nizans/graphology-web-project/blob/main/components/books/book.DAL.js), [articles.DAL](https://github.com/nizans/graphology-web-project/blob/main/components/articles/article.DAL.js)).<br>
The classes make it easy to add more components but also allowing flexibility and creating more complex components.<br>
It also helps the client expect a similar response.<br>
For example, a GET request to [get some articles](https://github.com/nizans/graphology-web-project/blob/122ab1df901213c8e9f5c6c1a52aef1f82275614/base/DAL.js#L33) will have a similar response to a request to [get some books](https://github.com/nizans/graphology-web-project/blob/122ab1df901213c8e9f5c6c1a52aef1f82275614/base/DAL.js#L33):

```
GET /api/articles
GET /api/books
```

Will have a similar response:

<!-- prettier-ignore-start -->
```yaml
{ 
    'page': 0,
    'sorted_by': '-uploadDate',
    'pages': <number of pages>, 
    'found_items': <number of items found>, 
    'payload': [
        ...<array of books or articles items>
    ] 
}
```
<!-- prettier-ignore-end -->

</details>

<details>
<summary>
How does the server handle image uploads?
</summary>

The server uses the [uploadImages](https://github.com/nizans/graphology-web-project/blob/main/middleware/uploadImages.js) middleware, which includes the following steps:

1. [uploadImage](https://github.com/nizans/graphology-web-project/blob/main/middleware/uploadImages.js): Multer function, filters the unwanted filetypes and saves the file locally
2. [imageResizer](https://github.com/nizans/graphology-web-project/blob/main/utils/imageResizer.js): Saves a local thumbnail-sized copy
3. [addImagePrefix](https://github.com/nizans/graphology-web-project/blob/122ab1df901213c8e9f5c6c1a52aef1f82275614/middleware/uploadImages.js#L26): Adds an image/images field to the request body, including the correct pathname for each image.
4. [uploadToS3](https://github.com/nizans/graphology-web-project/blob/main/middleware/uploadToS3.js): Uploads the images to the S3 bucket while keeping the same pathname (will be used later to serve the images back to the client)
5. [deleteTempImages](https://github.com/nizans/graphology-web-project/blob/122ab1df901213c8e9f5c6c1a52aef1f82275614/middleware/deleteTempImages.js#L3): Deletes the local files

### Example:

The following request containing 3 image fields:

```http
POST /api/articles
Content-Type: multipart/form-data
body:
{
image: (binary)
image: (binary)
image: (binary)
}

```

Will respond with:

```json
{
  "images": [
    {
      "full": "/images/filname1.JPG",
      "thumb": "/thumbs/filname1.JPG",
      "_id": "61645b0b08ece613c05acfd5"
    },
    {
      "full": "/images/filename2.JPG",
      "thumb": "/thumbs/filename2.JPG",
      "_id": "61645b0b08ece613c05acfd6"
    },
    {
      "full": "/images/filename3.JPG",
      "thumb": "/thumbs/filename3.JPG",
      "_id": "61645b0b08ece613c05acfd7"
    }
  ]
}
```

</details>

<details>
<summary>How does the server serve images?</summary>

All the image files are stored in an S3 bucket that can be accessed only by the server.
Each file has a full-sized and a thumb-size copy.

Both files share the same file name but are located in different folders in the bucket (different prefixes).

[images.routes](https://github.com/nizans/graphology-web-project/blob/122ab1df901213c8e9f5c6c1a52aef1f82275614/routes/images.routes.js#L6) will handle GET requests to `/images/:name` or `/thumbs/:name`, get the [file stream from S3](https://github.com/nizans/graphology-web-project/blob/122ab1df901213c8e9f5c6c1a52aef1f82275614/routes/images.routes.js#L6), and [pipe](https://github.com/nizans/graphology-web-project/blob/122ab1df901213c8e9f5c6c1a52aef1f82275614/routes/images.routes.js#L6) it back to the client.

This makes it easy to change from S3 bucket to local static folders without too much code rewrite, as the S3 buckets act as an extension to the server.

<img src="./docs/diagrams/Serving images.png" />

</details>

<details><summary>How Authorization Works?</summary>

The app uses a secure cookie containing [JWT](https://jwt.io/) to authorize requests.<br>
When a POST to /auth/login or /auth/refresh succeeds, the [server sets a secure cookie](https://github.com/nizans/graphology-web-project/blob/8854c175c4eb521db47e6f8527eb5fedff49bd57/components/auth/auth.controller.js#L30) containing a JWT with a relatively short expiry.<br>

On every successful login, the client receives the secure cookie with the JWT, the user info, and another JWT, called a refresh token, which the server stores a copy of in the DB.<br>

The refresh token can then be used for silent logins and renewing the cookie.<br>
So on every POST request to /auth/refresh, the server looks for the refresh token in the request body, checks if it exists in the DB, then verify it.<br>
If everything succeeds, the server replaces the cookie with a fresh JWT.<br>

When the client makes a DELETE request to /auth/logout, the server removes the cookie and deletes the refresh token from the DB ([code reference](https://github.com/nizans/graphology-web-project/blob/8854c175c4eb521db47e6f8527eb5fedff49bd57/components/auth/auth.controller.js#L37)). <br>

The [protectRoute](https://github.com/nizans/graphology-web-project/blob/main/middleware/protectRoute.js#L5) middleware restrict any POST, DELETE, PUT, and PATCH requests that do not have a valid JWT cookie.<br>

</details>
