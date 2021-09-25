import { ApiRequests } from 'lib/ApiRequest';

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
