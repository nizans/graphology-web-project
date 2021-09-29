import ApiCRUDRequests from 'lib/ApiRequest';

const CERTIFICATION_QUERY = 'certifications';
class CertificationsApiCRUDRequests extends ApiCRUDRequests {
  constructor() {
    super(CERTIFICATION_QUERY);
  }
}
export const certificationsApiCRUDRequests = new CertificationsApiCRUDRequests();

