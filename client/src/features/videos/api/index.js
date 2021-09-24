// import { BASE_URL } from 'config/constants';

import ApiCRUDRequests from 'ApiRequest';

// const VIDEOS_URL = new URL(BASE_URL + '/api/videos');
// const requests = {
//   GET_ALL: {
//     query: ['videos'],
//     url: VIDEOS_URL,
//     options: { method: 'get' },
//   },
//   GET_BY_ID: id => ({
//     query: ['videos', id],
//     url: VIDEOS_URL,
//     options: { method: 'get' },
//   }),

//   ADD: {
//     query: ['videos'],
//     url: VIDEOS_URL,
//     options: { method: 'post', headers: new Headers({ 'Content-Type': 'application/json' }) },
//     body: {},
//   },

//   DELETE: {
//     query: ['videos'],
//     url: VIDEOS_URL,
//     options: { method: 'delete' },
//   },

//   UPDATE: {
//     query: ['videos'],
//     url: VIDEOS_URL,
//     options: { method: 'put' },
//   },
// };
// export const VIDEOS_API = Object.freeze(requests);

const VIDEOS_QUERY = 'videos';

class VideosApiCRUDRequests extends ApiCRUDRequests {
  constructor() {
    super(VIDEOS_QUERY);
  }
}
export const videosApiCRUDRequests = new VideosApiCRUDRequests();
