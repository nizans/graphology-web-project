import ApiCRUDRequests from 'ApiRequest';
// import { BASE_URL } from 'config/constants';

// const CONTENTS_URL = new URL(BASE_URL + '/api/contents');
// const requests = {
//   GET_ALL: {
//     query: ['contents'],
//     url: CONTENTS_URL,
//     options: { method: 'get' },
//   },
//   GET_BY_ID: id => ({
//     query: ['contents', id],
//     url: CONTENTS_URL,
//     options: { method: 'get' },
//   }),

//   ADD: {
//     query: ['contents'],
//     url: CONTENTS_URL,
//     options: { method: 'post' },
//     body: {},
//   },

//   DELETE: {
//     query: ['contents'],
//     url: CONTENTS_URL,
//     options: {
//       method: 'delete',
//     },
//   },

//   UPDATE: {
//     query: ['contents'],
//     url: CONTENTS_URL,
//     options: { method: 'put' },
//   },
// };

const ARTICLES_QUERY = 'contents';

class ContentsApiCRUDRequests extends ApiCRUDRequests {
  constructor() {
    super(ARTICLES_QUERY);
  }
}

export const contentsApiCRUDRequests = new ContentsApiCRUDRequests();
