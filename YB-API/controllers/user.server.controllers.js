var User = require('mongoose').model('User'),
    passport = require('passport'),
    jwt = require('jwt-simple'),
    config = require('../../config/config');

exports.signup = function(req, res, next) {
  if (!req.body.username || !req.body.password || !req.body.email ) {
    res.json({success: false, msg: 'Please pass username and password.'});
  } else {
    var newUser = new User(req.body);
    // save the user
    newUser.save(function(err) {
      if (err) {
        console.log('err is ', err);
        return res.json({success: false, msg: 'Username already exists.'});
      }
      res.json({success: true, msg: 'Successful created new user.'});
    });
  }
};

exports.authenticate = function(req, res) {
  User.findOne({
    username: req.body.username
  }, function(err, user) {
    if (err) throw err;
 
    if (!user) {
      res.send({success: false, msg: 'Authentication failed. User not found.'});
    } else {
      // check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          // if user is found and password is right create a token
          var token = jwt.encode(user, config.sessionSecret);
          // return the information including token as JSON
          res.json({success: true, username: user.username, token: 'JWT ' + token});
        } else {
          res.send({success: false, msg: 'Authentication failed. Wrong password.'});
        }
      });
    }
  });
};

// exports.signout = function(req, res) {
//   req.session.username = null;
//   req.session.created = null;
//   return res.json(
//     { 
//       success: true,
//       username: res.session.username,
//       created: req.session.created,
//       loggedin: false 
//     }
//   );
// }
