var config = require('./config'),
    express = require('express'),
    cors = require('cors'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    session = require('express-session'),
    passport = require('passport');
  
// custom middleware

module.exports = function() {
  var app = express();

  if (process.env.NODE_ENV === "development") {
    app.use(morgan('dev'));
    app.use(cors()); // control CORS
  } else if (process.env.NODE_ENV === "production") {
    app.use(compress());
  }

  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: config.sessionSecret,
  }));

  // initilize passport
  app.use(passport.initialize());

  // hook  the routes to the application

  require('../YB-API/routes/index.server.routes.js')(app);
  require('../YB-API/routes/users.server.routes.js')(app);
  require('../YB-API/routes/feed.server.routes.js')(app);
  require('../YB-API/routes/comment.server.routes')(app);

  app.use(express.static('./public'));

  return app;
}