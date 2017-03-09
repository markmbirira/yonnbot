var passport = require('passport'),
    url = require('url'),
    FacebookStrategy = require('passport-facebook').Strategy,
    config = require('../config'),
    users = require('../../YB-API/controllers/user.server.controllers');


module.exports = function() {
  passport.use(new FacebookStrategy({
    clientID: config.facebook.clientID,
    clientSecret:config.facebook.clientSecret,
    callbackURL: config.facebook.callbackURL,
    passReqToCallback: true,
    profileFields: ['id', 'emails', 'name'],
  },
  function(req, accessToken, refreshToken, profile, done) {
    var providerData = profile._json;
    providerData.accessToken = accessToken;
    providerData.refreshToken = refreshToken;

    var providerUserProfile = {
      firstName: profile.name.givenName,
      lastName: profile.name.familyName,
      fullName: profile.displayName,
      email: (profile.emails) ? profile.emails[0].value : 'undefined@undefined.com', // data isnt being sent down
      provider: 'facebook',
      providerId: profile.id,
      providerData: providerData
    };

    users.saveOAuthUserProfile(req, providerUserProfile, done);
  }));
};