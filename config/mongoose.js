var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function() {
  var db = mongoose.connect(config.db);

  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'error connecting with mongodb database:'));

  db.once('open', function() {
    console.log('connected to mongodb database');
  });  

  db.on('disconnected', function () {
    //Reconnect on timeout
    mongoose.connect(config.db);
    db = mongoose.connection;
  });

  require('../YB-API/models/user.server.models');
  require('../YB-API/models/feed.server.models');
  require('../YB-API/models/comment.server.model');

  return db;
}