var config = require('./config'),
    express = require('express'),
    cors = require('cors'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    session = require('express-session'),
    flash = require('connect-flash'),
    passport = require('passport');

module.exports = function() {
  var app = express();

  if (process.env.NODE_ENV === "development") {
    app.use(morgan('dev'));
  } else if (process.env.NODE_ENV === "production") {
    app.use(compress());
  }

  app.use(cors()); // for production

  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: config.sessionSecret,
  }));

  app.use(morgan('dev')); // fix this

  app.set('views', './yonnbot/views');
  app.set('view engine', 'ejs');

  app.use(flash());
  app.use(passport.initialize());
  app.use(passport.session());

  // hook  the routes to the application

  require('../YB-API/routes/index.server.routes.js')(app);
  require('../YB-API/routes/users.server.routes.js')(app);
  require('../YB-API/routes/feed.server.routes.js')(app);
  require('../YB-API/routes/category.server.routes')(app);

  app.use(express.static('./public'));

  return app;
}