var users = require('../../YB-API/controllers/user.server.controllers');

module.exports = function(app) {
  app.route('/signup')
    .get(users.signup) // APIs role
    .post(users.signup);
  
  app.route('/signin')
    .get(users.signin) // APIs role
    .post(users.signin);
  
  app.get('/signout', users.signout);
};