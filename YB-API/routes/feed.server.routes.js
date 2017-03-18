var feed = require('../../YB-API/controllers/feed.server.controllers');

module.exports =  function(app) {
  app.route('/feed/:page')
    .get(feed.pagedPosts);
  app.route('/feed')
    .post(feed.create);
  
  app.route('/feed/view/:id')
    .get(feed.singlePost)
    .put(feed.update)
    .delete(feed.delete);
  
  // app.param('id', feed.feedById);
}