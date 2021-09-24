import { ApiRequests } from 'ApiRequest';

// const { BASE_URL } = require('config/constants');

// export const CONTACT_URL = new URL(BASE_URL + '/api/contact');

// const requests = {
//   SEND_CONTACT: {
//     query: ['contact'],
//     url: CONTACT_URL,
//     options: {
//       method: 'post',
//       headers: new Headers({ 'content-type': 'application/json' }),
//     },
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
const CONTACT_QUERY = 'contact';
class ContactApiRequests extends ApiRequests {
  constructor() {
    super(CONTACT_QUERY);
    this.orderBook = {
      query: [this.query],
      url: this.baseUrl,
      options: { method: 'post', headers: new Headers({ 'content-type': 'application/json' }) },
    };
    this.sendContactRequest = {
      query: [this.query],
      url: this.baseUrl,
      options: { method: 'post', headers: new Headers({ 'content-type': 'application/json' }) },
    };
  }
}
export const contactApiRequests = new ContactApiRequests();
