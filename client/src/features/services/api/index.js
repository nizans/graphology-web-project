// import { BASE_URL } from 'config/constants';

import ApiCRUDRequests from 'ApiRequest';

// const SERVICES_URL = new URL(BASE_URL + '/api/services');
// const requests = {
//   GET_ALL: {
//     query: ['services'],
//     url: SERVICES_URL,
//     options: { method: 'get' },
//   },
//   GET_BY_ID: id => ({
//     query: ['services', id],
//     url: SERVICES_URL,
//     options: { method: 'get' },
//   }),

//   ADD: {
//     query: ['services'],
//     url: SERVICES_URL,
//     options: { method: 'post' },
//     body: {},
//   },

//   DELETE: {
//     query: ['services'],
//     url: SERVICES_URL,
//     options: { method: 'delete' },
//   },

//   UPDATE: {
//     query: ['services'],
//     url: SERVICES_URL,
//     options: { method: 'put' },
//   },
// };

// export const SERVICES_API = Object.freeze(requests);

const SERVICE_QUERY = 'services';

class ServicesApiCRUDRequests extends ApiCRUDRequests {
  constructor() {
    super(SERVICE_QUERY);
  }
}
export const servicesApiCRUDRequests = new ServicesApiCRUDRequests();
