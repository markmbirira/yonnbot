var passport = require('passport'),
  JwtStrategy = require('passport-jwt').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt,
  User = require('mongoose').model('User');
  config = require('../config'); 
 
module.exports = function() {
  var opts = {};
  opts.secretOrKey = config.sessionSecret;
  opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
  passport.use(new JwtStrategy(opts,
    function(jwt_payload, done) {
      User.findOne({_id: jwt_payload._id}, function(err, user) {
        if (err) {
          return done(err, false);
        }
        if (user) {
          done(null, user);
        } else {
          done(null, false);
        }
      });
    }
  ));
};
