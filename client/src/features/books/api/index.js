import ApiCRUDRequests from 'lib/ApiRequest';

const BOOKS_QUERY = 'books';
class BooksApiCRUDRequests extends ApiCRUDRequests {
  constructor() {
    super(BOOKS_QUERY);
  }
}
export const booksApiCRUDRequests = new BooksApiCRUDRequests();

