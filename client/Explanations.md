# How Stuff Works? - client side

<details>
<summary>
How Does The App Handles API Requests?
</summary>

[react-query](https://react-query.tanstack.com/) was chosen to handle all API requests, because it is very eazy to code, eazy to debug, and handles caching.

All API requests in the app use react-query with the [ApiRequests](https://github.com/nizans/graphology-web-project/blob/main/client/src/lib/ApiRequest.js) class.

I created [custom react-hooks](https://github.com/nizans/graphology-web-project/blob/6a8384d3e5dac31e159bb6ed2c416238284c05ea/client/src/lib/reactQuery.js#L16) to wrap react-query functions and the [\_fetch](https://github.com/nizans/graphology-web-project/blob/6a8384d3e5dac31e159bb6ed2c416238284c05ea/client/src/lib/reactQuery.js#L30) function to wrap the fetch API.

The hooks expect an apiRequest object containing all the information needed to make the request (e.g., URL, URI, search queries, options).

The \_fetch function checks if the response was successful and parses the JSON from the response body. It also throws any errors that occur.

[ApiRequests](https://github.com/nizans/graphology-web-project/blob/main/client/src/lib/ApiRequest.js) is a class that contains three fields:
- query: the URI and name of the API endpoint, used in react-query and for constructing the URL.
- baseUrl: the base URL of the server of the class instance (e.g., if the query is 'articles' and BASE_URL is 'http://localhost:4000' then baseUrl would be: http://localhost:4000/api/articles)
- baseOptions: the options passed with the HTTP request.

[ApiCRUDRequests](https://github.com/nizans/graphology-web-project/blob/6a8384d3e5dac31e159bb6ed2c416238284c05ea/client/src/lib/ApiRequest.js#L28) extends ApiRequests and includes an object or a function that returns an object for the CRUD operations.

Any app feature can then initiate or extend the class to make API calls from the custom hooks.

I created an extended class for each feature and overridden any needed fields(e.g., [contact](https://github.com/nizans/graphology-web-project/blob/main/client/src/features/contact/api/index.js), [auth](https://github.com/nizans/graphology-web-project/blob/6a8384d3e5dac31e159bb6ed2c416238284c05ea/client/src/features/admin/api/index.js#L5), [articles](https://github.com/nizans/graphology-web-project/blob/main/client/src/features/articles/api/index.js)).

**Some examples:**
- A simple GET request to fetch books: [BooksApiCRUDRequests](https://github.com/nizans/graphology-web-project/blob/main/client/src/features/books/api/index.js) is an extension of ApiCRUDRequests and is used [here](https://github.com/nizans/graphology-web-project/blob/6a8384d3e5dac31e159bb6ed2c416238284c05ea/client/src/features/books/components/Books.js#L12) to fetch books using the read method.
- A delete request: [delete a book](https://github.com/nizans/graphology-web-project/blob/6a8384d3e5dac31e159bb6ed2c416238284c05ea/client/src/features/books/components/OrderBook.js#L20).
- Get a single book: [read](https://github.com/nizans/graphology-web-project/blob/6a8384d3e5dac31e159bb6ed2c416238284c05ea/client/src/features/books/components/OrderBook.js#L19) with ID parameter.

  
**This design helped reduce code repetition, keep the react components lean, and allow easy changing.
An example for an API request:**
```javascript
import { useFetchData } from 'lib/reactQuery';
import { booksApiCRUDRequests } from 'features/books/index.js';

// Just call the hook with the CRUD-request
// null is because there is no need to add a URI, and { page } is a search query

const SomeComponent = () => {
  const { isLoading, data, error } = useFetchData(booksApiCRUDRequests.read(null, { page }));

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <LoadingComponent></LoadingComponent>;
  return <div>{data}</div>;
};
```

</details>
