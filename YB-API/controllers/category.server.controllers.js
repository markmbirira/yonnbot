var Category = require('mongoose').model('Category'),
    Post = require('mongoose').model('Post');
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

  return message;
};

exports.allCategories = function(req, res, next) {
  Category.find({}, function(err, categories) {
    if (err) {
      var message = getErrorMessage(err);
      
      res.json({ success: false, message: message });
    } else {
       console.log('fetch sucess');
      
       res.json(categories);
    }
  });
};

exports.singleCategory = function(req, res, next) {
   var id = req.param('id');
   Category.find({ _id: id }, function(err, category) {
     if (err) {
       var message = getErrorMessage(err);

       res.json({ success: false, message: message });
     } else {
       console.log('fetch success');
       res.json(category);
     }
   });
};

exports.create = function(req, res, next) {
    var category = new Category(req.body);
  
    category.save(function(err, category) {
      if (err) {
        message = getErrorMessage(err);

        res.json({ success: false, message: message });
      } else {
        res.json(category);
      }
    })
};

exports.update = function(req, res,  next) {
  var id = req.param('id');
  Category.findByIdAndUpdate(id, req.body, function(err, category) {
    if (err) {
      var message = getErrorMessage(err);
      res.json({ success: false , message: message });
    } else {
      res.json(category);
    }
  })
};

// category deletion is disabled for now
exports.delete = function(req, res, next) {
  var id = req.param('id');
  var title = req.body.title;
  var creator = req.body.creator;

  id = (creator === "yonnbot") ? null : id; // Only delete user created categories
  title = (creator === "yonnbot") ? null : title; // Only delete user created categories

  Post.find({ category: title }).remove(function (err, removed) {
    if (!err) {
      console.log(`Success deleting all Posts in \"${title}\"`);
    } else {
      console.log(`Error deleting all Posts in \"${title}\" `);
    }
  });

  Category.findByIdAndRemove(id, function(err, category) {
    if (err) {
      var message = getErrorMessage(err);

      res.json({ success: false, message: err });
    } else {
      res.json(category);
    }
  });
};