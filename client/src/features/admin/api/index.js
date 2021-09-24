import ApiCRUDRequests, { ApiRequests } from 'ApiRequest';
import { AUTH_URL } from 'config/constants';

const AUTH_QUERY = 'auth';
const ADMIN_QUERY = 'admins';
class AuthAPIRequests extends ApiRequests {
  constructor() {
    super(AUTH_QUERY);
    this.baseUrl = new URL(AUTH_URL + '/' + this.query);

    this.login = {
      query: [this.query, 'login'],
      url: new URL(this.baseUrl + '/login'),
      options: {
        ...this.baseOptions,
        method: 'post',
        headers: new Headers({ 'content-type': 'application/json' }),
      },
    };

    this.logout = {
      query: [this.query, 'logout'],
      url: new URL(this.baseUrl + '/logout'),
      options: {
        ...this.baseOptions,
        method: 'delete',
        headers: new Headers({ 'content-type': 'application/json' }),
      },
    };

    this.refresh = {
      query: [this.query, 'refresh'],
      url: new URL(this.baseUrl + '/refresh'),
      options: {
        ...this.baseOptions,
        method: 'post',
        headers: new Headers({ 'content-type': 'application/json' }),
      },
    };

    this.renew = {
      query: [this.query, 'renew'],
      url: new URL(this.baseUrl + '/renew'),
      options: {
        ...this.baseOptions,
        method: 'put',
        headers: new Headers({ 'content-type': 'application/json' }),
      },
    };
  }
}

class AdminApiCRUDRequests extends ApiCRUDRequests {
  constructor() {
    super(ADMIN_QUERY);

    this.create = {
      ...this.create,
      options: { ...this.create.options, headers: new Headers({ 'Content-Type': 'application/json' }) },
    };
  }
}

export const authAPIRequests = new AuthAPIRequests();
export const adminApiCRUDRequests = new AdminApiCRUDRequests();
