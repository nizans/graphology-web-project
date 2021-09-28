import ApiCRUDRequests, { ApiRequests } from 'lib/ApiRequest';

const AUTH_QUERY = 'auth';
const ADMIN_QUERY = 'admins';
class AuthAPIRequests extends ApiRequests {
  constructor() {
    super(AUTH_QUERY);

    this.login = {
      query: [this.query, 'login'],
      url: new URL(this.baseUrl + '/login'),
      options: {
        ...this.baseOptions,
        method: 'POST',
        headers: new Headers({ 'content-type': 'application/json' }),
      },
    };

    this.logout = {
      query: [this.query, 'logout'],
      url: new URL(this.baseUrl + '/logout'),
      options: {
        ...this.baseOptions,
        method: 'DELETE',
        headers: new Headers({ 'content-type': 'application/json' }),
      },
    };

    this.refresh = {
      query: [this.query, 'refresh'],
      url: new URL(this.baseUrl + '/refresh'),
      options: {
        ...this.baseOptions,
        method: 'POST',
        headers: new Headers({ 'content-type': 'application/json' }),
      },
    };

    this.renew = {
      query: [this.query, 'renew'],
      url: new URL(this.baseUrl + '/renew'),
      options: {
        ...this.baseOptions,
        method: 'PUT',
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

    this.resetPassword = {
      query: [this.query, 'resetPassword'],
      url: new URL(this.baseUrl + '/resetPassword'),
      options: {
        ...this.baseOptions,
        method: 'PATCH',
        headers: new Headers({ 'Content-Type': 'application/json' }),
      },
    };
  }
}

export const authAPIRequests = new AuthAPIRequests();
export const adminApiCRUDRequests = new AdminApiCRUDRequests();
