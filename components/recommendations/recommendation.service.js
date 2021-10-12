const Service = require('../../base/Service');
const RecommendationDal = require('./recommendation.DAL');
const { createRecommendationValidation, updateRecommendationValidation } = require('./recommendation.validation');

class RecommendationService extends Service {
  constructor() {
    super(RecommendationDal);
  }

  async create(data) {
    await createRecommendationValidation.validateAsync(data);
    return await super.create(data);
  }

  async update(id, data) {
    await updateRecommendationValidation.validateAsync(data);
    return await super.update(id, data);
  }
}

module.exports = new RecommendationService();
