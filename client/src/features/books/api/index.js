import ApiCRUDRequests from 'ApiRequest';
// import { BASE_URL } from 'config/constants';
// import { CONTACT_URL } from 'features/contact/api';

// const BOOKS_URL = new URL(BASE_URL + '/api/books');
// const requests = {
//   GET_ALL: {
//     query: ['books'],
//     url: BOOKS_URL,
//     options: { method: 'get' },
//   },

//   GET_BY_ID: id => ({
//     query: ['books', id],
//     url: BOOKS_URL,
//     options: { method: 'get' },
//   }),

//   ADD: {
//     query: ['books'],
//     url: BOOKS_URL,
//     options: { method: 'post' },
//     body: {},
//   },

//   DELETE: {
//     query: ['books'],
//     url: BOOKS_URL,
//     options: { method: 'delete' },
//   },

//   UPDATE: {
//     query: ['books'],
//     url: BOOKS_URL,
//     options: { method: 'put' },
//   },

//   ORDER_BOOK: id => ({
//     query: ['books', id],
//     url: new URL(CONTACT_URL + '/order-book'),
//     options: {
//       method: 'post',
//       headers: new Headers({ 'content-type': 'application/json' }),
//     },
//   }),
// };

const BOOKS_QUERY = 'books';
class BooksApiCRUDRequests extends ApiCRUDRequests {
  constructor() {
    super(BOOKS_QUERY);
  }
}
export const booksApiCRUDRequests = new BooksApiCRUDRequests();

// export const BOOKS_API = Object.freeze(requests);
