var users = require('../../YB-API/controllers/user.server.controllers'),
    passport = require('passport');

module.exports = function(app) {
  app.route('/signup')
    .get(users.signin) // APIs role
    .post(users.signup);
  
  app.route('/signin')
    .get(users.signin) // APIs role
    .post(passport.authenticate('local', {
      successRedirect: '/auth/success',
      failureRedirect: '/signin',
      failureFlash: 'true'
    }));
  
  app.route('/auth/success')
    .get(users.isLoggedIn);
  
  app.route('/auth/logout')
    .get(users.isLoggedOut);
  
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