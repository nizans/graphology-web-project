import ApiCRUDRequests from 'lib/ApiRequest';
const ARTICLES_QUERY = 'articles';

class ArticlesApiCRUDRequests extends ApiCRUDRequests {
  constructor() {
    super(ARTICLES_QUERY);
  }
}
export const articlesApiCRUDRequests = new ArticlesApiCRUDRequests();
