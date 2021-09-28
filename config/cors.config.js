module.exports = {
  credentials: true,
  origin: ['http://localhost:3000', 'http://localhost:4000', 'https://michal-doron.herokuapp.com'],
  methods: 'HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
};
