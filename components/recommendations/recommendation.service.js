const Service = require('../../base/Service');
const RecommendationDal = require('./recommendation.DAL');

class RecommendationService extends Service {
  constructor() {
    super(RecommendationDal);
  }
}

module.exports = new RecommendationService();
