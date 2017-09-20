var comment = require('../../YB-API/controllers/comment.server.controllers')
var passport = require('passport')

module.exports = function (app) {
  app.route('/api/v1/comment')
    .post(passport.authenticate('jwt', { session: false }),
      comment.create)

  app.route('/api/v1/comments/:post_id')
    .get(comment.allPostComments)

  app.route('/api/v1/comment/:comment_id')
    .get(comment.singlePostComment)
    .put(passport.authenticate('jwt', { session: false }),
      comment.update)
    .delete(passport.authenticate('jwt', { session: false }),
      comment.delete)
}
