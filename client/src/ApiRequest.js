import { BASE_URL } from 'config/constants';

export const setParams = (url, params) => {
  for (const [key, value] of Object.entries(params)) {
    if (value !== null && value !== 0) url.searchParams.set(key, value);
  }
};

const _SORT_BY = {
  UPLOAD_DATE_DESC: '-uploadDate',
  UPLOAD_DATE_ASC: 'uploadDate',
  TITLE_DESC: '-title',
  TITLE_ASC: 'title',
};

export const SORT_BY = Object.freeze(_SORT_BY);

export class ApiRequests {
  constructor(query) {
    this.query = query;
    this.baseUrl = new URL(BASE_URL + '/api/' + query);
    this.baseOptions = {
      credentials: 'include',
    };
  }
}

class ApiCRUDRequests extends ApiRequests {
  constructor(query) {
    super(query);
    this.create = Object.freeze({
      query: [this.query],
      url: this.baseUrl,
      options: { ...this.baseOptions, method: 'post', headers: new Headers() },
    });

    this.update = Object.freeze({
      query: [this.query],
      url: this.baseUrl,
      options: { ...this.baseOptions, method: 'put', headers: new Headers() },
    });

    this.delete = Object.freeze({
      query: [this.query],
      url: this.baseUrl,
      options: { ...this.baseOptions, method: 'delete', headers: new Headers() },
    });
  }

  read = (uriParam, queryParams) => {
    const query = [this.query];
    let _url = new URL(this.baseUrl);
    if (uriParam) {
      query.push(uriParam);
      _url = new URL(_url + '/' + uriParam);
    }
    if (queryParams) {
      query.push(queryParams);
      setParams(_url, queryParams);
    }
    return {
      query,
      url: _url,
      options: { ...this.baseOptions, method: 'get', headers: new Headers() },
    };
  };
}

export default ApiCRUDRequests;
