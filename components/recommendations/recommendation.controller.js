const Controller = require('../../base/Controller');
const RecommendationService = require('./recommendation.service');

class RecommendationController extends Controller {
  constructor() {
    super(RecommendationService);
  }
}
module.exports = new RecommendationController();
