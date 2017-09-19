var index = require('../../YB-API/controllers/index.server.controllers')

module.exports = function (app) {
  app.route('/api/v1/')
    .get(index.index) /* only GET method allowed for API root */
}
