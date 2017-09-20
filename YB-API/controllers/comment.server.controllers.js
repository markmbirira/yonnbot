var Comment = require('mongoose').model('Comment')

var getErrorMessage = function (err) {
  return err
}

exports.allPostComments = function (req, res, next) {
  var postId = req.param('post_id')

  Comment.find({ 'post_id': postId }, function (err, comments) {
    if (err) {
      var message = getErrorMessage(err)

      res.json({ success: false, message: message })
    } else {
      console.log('fetch sucess')
      res.json(comments)
    }
  })
}

exports.singlePostComment = function (req, res, next) {
  var commentId = req.param('comment_id')

  Comment.findById(commentId, function (err, comment) {
    if (err) {
      var message = getErrorMessage(err)

      res.json({ success: false, message: message })
    } else {
      console.log('fetch success')
      res.json(comment)
    }
  })
}

exports.create = function (req, res, next) {
  var comment = new Comment(req.body)
  comment.author_id = req.user._id

  comment.save(function (err, comment) {
    if (err) {
      var message = getErrorMessage(err)
      res.json({ success: false, message: message })
    } else {
      res.json({ success: true, comment: comment })
    }
  })
}

exports.update = function (req, res, next) {
  var id = req.param('comment_id')
  Comment.findByIdAndUpdate(id, req.body, function (err, comment) {
    if (err) {
      var message = getErrorMessage(err)
      res.json({ success: false, message: message })
    } else {
      res.json(comment)
    }
  })
}

// category deletion is disabled for now
exports.delete = function (req, res, next) {
  var id = req.param('comment_id')
  Comment.findByIdAndRemove(id, function (err, comment) {
    if (err) {
      var message = getErrorMessage(err)
      res.json({ success: false, message: message })
    } else {
      res.json(comment)
    }
  })
}
