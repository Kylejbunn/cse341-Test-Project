const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Sarah Birch');
});

routes.get('/test', (req, res) => {
  res.send('Kyle B');
});

module.exports = routes;
