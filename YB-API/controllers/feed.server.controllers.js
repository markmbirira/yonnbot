var Post = require('mongoose').model('Post'),
    User = require('mongoose').model('User');

var getErrorMessage = function(err) {
  if (err.code) {
    message = 'Something went wrong';
  } else {
    for (var errName in err.errors) {
      if (err.errors[errName].message) message = err.errors[errName].message;
       else message = "something went wrong"
    }
  }

  return "Something went wrong";
};

exports.pagedPosts = function(req, res, next) {
  var query = {};
  var options = {
    sort: { 'created': -1 },
    // populate: 'author',
    page: req.param('page') || 1,
    limit: 20
  };

  Post.paginate(query, options, function(err, posts) {
    if (err) {
      var message = getErrorMessage(err);
      
      res.json({ success: false, message: message });
    } else {
       console.log('fetch sucess');
       res.json(posts);
    }
  });
};

exports.singlePost = function(req, res, next) {
   var id = req.param('id');
   Post.find({ _id: id }, function(err, post) {
     if (err) {
       var message = getErrorMessage(err);

       res.json({ success: false, message: message });
     } else {
       console.log('fetch success');
       res.json(post);
     }
   });
};

exports.create = function(req, res, next) {
    var post = new Post(req.body);
    post.color = "#ccc";
    post.save(function(err, feed) {
      if (err) {
        message = getErrorMessage(err);

        res.json({ success: false, message: message });
      } else {
        res.json(feed);
      }
    })
};

exports.update = function(req, res,  next) {
  var id = req.param('id');
  Post.findByIdAndUpdate(id, req.body, function(err, feed) {
    if (err) {
      var message = getErrorMessage(err);
      res.json({ success: false , message: message });
    } else {
      res.json(feed);
    }
  })
};

exports.delete = function(req, res, next) {
  var id = req.param('id');
  Post.findByIdAndRemove(id, function(err, feed) {
    if (err) {
      var error = getErrorMessage(err);
      res.json({ success: false, message: message })
    } else {
      res.json(feed);
    }
  });
};