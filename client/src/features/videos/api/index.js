import ApiCRUDRequests from 'lib/ApiRequest';

const VIDEOS_QUERY = 'videos';

class VideosApiCRUDRequests extends ApiCRUDRequests {
  constructor() {
    super(VIDEOS_QUERY);
    this.create.options.headers.set('Content-Type', 'application/json');
  }
}
export const videosApiCRUDRequests = new VideosApiCRUDRequests();
