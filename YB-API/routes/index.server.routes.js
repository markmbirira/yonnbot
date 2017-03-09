var index = require('../../YB-API/controllers/index.server.controllers');

module.exports = function(app) {
  app.route('/')
    .get(index.index); // only allow GET
}
