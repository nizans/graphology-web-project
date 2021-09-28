import ApiCRUDRequests from 'lib/ApiRequest';

const ARTICLES_QUERY = 'contents';

class ContentsApiCRUDRequests extends ApiCRUDRequests {
  constructor() {
    super(ARTICLES_QUERY);
  }
}

export const contentsApiCRUDRequests = new ContentsApiCRUDRequests();
