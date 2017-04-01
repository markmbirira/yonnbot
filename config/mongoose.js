var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function() {
  var db = mongoose.connect(config.db);

  require('../YB-API/models/user.server.models');
  require('../YB-API/models/feed.server.models');
  require('../YB-API/models/comment.server.model');

  return db;
}