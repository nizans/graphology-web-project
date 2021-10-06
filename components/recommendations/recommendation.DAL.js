const Recommendation = require('./recommendation.model');
const DAL = require('../../base/DAL');

class RecommendationDAL extends DAL {
  constructor() {
    super(Recommendation, 'Recommendation');
  }
}

module.exports = new RecommendationDAL();
