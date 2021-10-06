const ComponentRouter = require('../../base/ComponentRouter');
const RecommendationController = require('./recommendation.controller');

class RecommendationRouter extends ComponentRouter {
  constructor() {
    super(RecommendationController);
  }
}

module.exports = new RecommendationRouter().router;
