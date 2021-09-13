const createProxyMiddleware = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    ['/api', '/thumbs', '/images'],
    createProxyMiddleware({
      target: 'http://localhost:4000',
      changeOrigin: true,
    })
  );
};
