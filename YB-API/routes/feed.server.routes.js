var feed = require('../../YB-API/controllers/feed.server.controllers');
var passport = require('passport');

module.exports =  function(app) {
  app.route('/api/v1/posts/:page')
    .get(feed.pagedPosts);

  app.route('/api/v1/post')
    .post(passport.authenticate('jwt', { session: false }),
    feed.create);

  app.route('/api/v1/post/:id')
    .get(feed.singlePost)
    .put(passport.authenticate('jwt', { session: false }),
      feed.update)
    .delete(passport.authenticate('jwt', { session: false }),
      feed.delete);
}