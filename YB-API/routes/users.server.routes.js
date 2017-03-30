var users = require('../../YB-API/controllers/user.server.controllers');

module.exports = function(app) {
  /* both routes are open/no-auth */
  app.route('/api/v1/signup')
    .post(users.signup);
  
  app.route('/api/v1/authenticate')
    .post(users.authenticate);
  
  // app.get('/api/v1/signout', users.signout); 
};