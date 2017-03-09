var users = require('../../YB-API/controllers/user.server.controllers'),
    passport = require('passport');

module.exports = function(app) {
  app.route('/signup')
    .get(users.renderSignUp)
    .post(users.signup);
  
  app.route('/signin')
    .get(users.renderSignIn)
    .post(passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/signin',
      failureFlash: 'true'
    }));

  app.get('/signout', users.signout);

  // facebook passport
  app.get('/oauth/facebook', passport.authenticate('facebook', {
    failureRedirect: '/signin'
  }));

  app.get('/oauth/facebook/callback', passport.authenticate('facebook', {
    scope: 'email',
    failureRedirect: 'signin',
    successRedirect: '/'
  }));
};