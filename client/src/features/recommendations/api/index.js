import ApiCRUDRequests from 'lib/ApiRequest';

const RECOMMENDATION_QUERY = 'recommendations';

class ReccomendationApiCRUDRequests extends ApiCRUDRequests {
  constructor() {
    super(RECOMMENDATION_QUERY);
    this.create.options.headers.set('Content-Type', 'application/json');
  }
}
export const recommendationApiCRUDRequests = new ReccomendationApiCRUDRequests();
