var Post = require('mongoose').model('Post')
// var User = require('mongoose').model('User')
// var jwt = require('jwt-simple')
// var config = require('../../config/config')

var getErrorMessage = function (err) {
  return err
}

exports.pagedPosts = function (req, res, next) {
  ;
  var query = {}
  var options = {
    sort: { 'created': -1 },
    // populate: 'author',
    page: req.param('page') || 1,
    limit: 20
  }

  Post.paginate(query, options, function (err, posts) {
    if (err) {
      var message = getErrorMessage(err)

      res.json({ success: false, message: message })
    } else {
      console.log('fetch sucess')
      res.json(posts)
    }
  })
}

exports.singlePost = function (req, res, next) {
  var id = req.param('id')
  Post.find({ _id: id }, function (err, post) {
    if (err) {
      var message = getErrorMessage(err)

      res.json({ success: false, message: message })
    } else if (!post.length) {
      res.json({ success: false, message: 'post not found' })
    } else {
      console.log('fetch success')
      res.json(post)
    }
  })
}

exports.create = function (req, res, next) {
  var post = new Post(req.body)
    /**
     * TODO: decode the access Token
     * find the user from Mongo
     * populate Author field and save
     */
  post.author_id = req.user._id

  post.save(function (err, feed) {
    if (err) {
      console.log('err ', err)
      var message = getErrorMessage(err)

      res.json({ success: false, message: message })
    } else {
      res.json(feed)
    }
  })
}

exports.update = function (req, res, next) {
  var id = req.param('id')
  Post.findByIdAndUpdate(id, req.body, function (err, feed) {
    if (err) {
      var message = getErrorMessage(err)
      res.json({ success: false, message: message })
    } else {
      res.json(feed)
    }
  })
}

exports.delete = function (req, res, next) {
  var id = req.param('id')
  Post.findByIdAndRemove(id, function (err, feed) {
    if (err) {
      var error = getErrorMessage(err)
      res.json({ success: false, message: error })
    } else {
      res.json(feed)
    }
  })
}
