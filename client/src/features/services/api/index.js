// import { BASE_URL } from 'config/constants';

import ApiCRUDRequests from 'lib/ApiRequest';

const SERVICE_QUERY = 'services';

class ServicesApiCRUDRequests extends ApiCRUDRequests {
  constructor() {
    super(SERVICE_QUERY);
  }
}
export const servicesApiCRUDRequests = new ServicesApiCRUDRequests();
