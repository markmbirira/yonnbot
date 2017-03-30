var User = require('mongoose').model('User');
var jwt = require('jwt-simple');
var config = require('../../../config/config');

var auth = {
  login: function(req, res) {
    var username = req.body.username || '';
    var password = req.body.password || '';
 
    if (username == '' || password == '') {
      res.status(401);
      res.json({
        "status": 401,
        "message": "Invalid credentials"
      });
      return;
    }
 
    // A query DB to check if the credentials are valid
    var dbUserObj = auth.validate(username, password);
   
    if (!dbUserObj) { // If authentication fails, send a 401 back
      res.status(401);
      res.json({
        "status": 401,
        "message": "Invalid credentials"
      });
      return;
    }
 
    if (dbUserObj) {
      // If authentication is success, we will generate a token
      // and dispatch it to the client
      res.json(genToken(dbUserObj));
    }
 
  },
 
  validate: function(username, password) {
    // spoofing the DB response
    User.findOne({ username: username }, 'username created role', function (err, user) {
      if (err) return handleError(err);
      if (user) {
        var dbUserObj = { // spoofing a userobject from the DB. 
          username: user.username,
          created: user.created,
          role: user.role,
        };
      }
      return dbUserObj;
    });
  },

  validateUser: function(username) {
    // spoofing the DB response
    User.findOne({ username: username }, 'username created role', function (err, user) {
      if (err) return handleError(err);
      if (user) {
        var dbUserObj = { // spoofing a userobject from the DB. 
          username: user.username,
          created: user.created,
          role: user.role,
        };
      }
      return dbUserObj;
    });
  },
  
}
 
// private method
function genToken(user) {
  var expires = expiresIn(7); // 7 days
  var token = jwt.encode({
    exp: expires
  }, config.sessionSecret); // configure with secret key
 
  return {
    token: token,
    expires: expires,
    user: user
  };
}
 
function expiresIn(numDays) {
  var dateObj = new Date();
  return dateObj.setDate(dateObj.getDate() + numDays);
}

function handleError(err) {
  var message = '';
  if (err.code) {
    switch (err.code) {
      case 11000:
      case 11001:
        message = "username already exists";
        break;     
      default:
        message = "something went wrong";
    }
  } else {
    for (var errName in err.errors) {
      if (err.errors[errName].message) message = err.errors[errName].message;
    } 
  }
  return message;
}

module.exports = auth;