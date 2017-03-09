var User = require('mongoose').model('User'),
    passport = require('passport');

var getErrorMessage = function(err) {
  var message = '';

  if (err.code) {
    switch (err.code) {
      case 11000:
      case 11001:
        message = "Username already exists";
        break;
      
      default:
        message = "Something went wrong";
    }
  } else {
    for (var errName in err.errors) {
      if (err.errors[errName].message) message = err.errors[errName].message;
    } 
  }

  return message;
};

exports.renderSignIn = function(req, res, next) {
  if (!req.user) {
    res.render('signin', {
      title: 'YB - Sign Up',
      messages: req.flash('error') || req.flash('info')
    });
  } else {
    return res.redirect('/');
  }
}

exports.renderSignUp = function(req, res, next) {
  if (!req.user) {
    res.render('signup', {
      title: 'YB - Sign In',
      messages: req.flash('error')
    });
  } else {
    return res.redirect('/');
  }
};

exports.signup = function(req, res, next) {
  if (!req.user) {
    var user = new User(req.body);
    var message = null;

    user.provider = 'local';

    user.save(function(err) {
      if (err) {
        var message = getErrorMessage(err);

        req.flash('error', message);
        return res.redirect('/signup');
      }
      req.login(user, function(err) {
        if (err) return next(err);
        return res.redirect('/');
      });
    });
  } else {
    return res.redirect('/');
  }
};

exports.signout = function(req, res) {
  req.logout();
  res.redirect('/');
}


// Support for OAuth with passport module

exports.saveOAuthUserProfile = function(req, profile, done) {
  User.findOne({
    provider: profile.provider,
    providerId: profile.providerId
  }, function(err, user) {
    if (err) {
      return done(err);
    } else {
      if (!user) {
        var possibleUsername = profile.username || 
          ((profile.email) ? profile.email.split('@')[0]: 'undefined@undefined.com');
        
        User.findOneByUsername(possibleUsername, null, function(availableUsername) {
          profile.username = availableUsername;
          user = new User(profile);

          user.save(function(err) {
            if (err) {
              var message = getErrorMessage(err);

              req.flash('error', message);
              console.log(message);
              return req.res.redirect('/signup');
            } else {
              req.login(user, function(err) {
                if (err) return next(err);
              });
            }

            return done(err, user);
          });
        });
      } else {
        return done(err, user);
      }
    }
  });
};