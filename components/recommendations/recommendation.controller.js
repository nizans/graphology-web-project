const Controller = require('../../base/Controller');
const { PAGE_NOT_FOUND } = require('../error/error.constants');
const RecommendationService = require('./recommendation.service');

class RecommendationController extends Controller {
  constructor() {
    super(RecommendationService);
  }
}

module.exports = new RecommendationController();
