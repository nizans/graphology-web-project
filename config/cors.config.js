module.exports = {
  credentials: true,
  origin: [
    'http://localhost:3000',
    'http://localhost:4000',
    'https://michal-doron.herokuapp.com',
    'http://192.168.1.102:3000',
  ],
  methods: 'HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
};
