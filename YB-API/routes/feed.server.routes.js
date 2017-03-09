var feed = require('../../YB-API/controllers/feed.server.controllers');

module.exports =  function(app) {
  app.route('/feed')
    .get(feed.pagedPosts)
    .post(feed.create);
  
  app.route('/feed/:id')
    .get(feed.singlePost)
    .put(feed.update)
    .delete(feed.delete);
  
  // app.param('id', feed.feedById);
}