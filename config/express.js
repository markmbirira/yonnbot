var config = require('./config')
var express = require('express')
var cors = require('cors')
var morgan = require('morgan')
var compress = require('compression')
var bodyParser = require('body-parser')
// var methodOverride = require('method-override')
var session = require('express-session')
var passport = require('passport')

module.exports = function () {
  var app = express()

  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
    app.use(cors()) // control CORS
  } else if (process.env.NODE_ENV === 'production') {
    app.use(compress())
  }

  app.use(bodyParser.urlencoded({
    extended: true
  }))
  app.use(bodyParser.json())
  app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: config.sessionSecret
  }))

  /* initilize passport */
  app.use(passport.initialize())

  /* hook  the routes to the application */
  require('../YB-API/routes/index.server.routes.js')(app)
  require('../YB-API/routes/users.server.routes.js')(app)
  require('../YB-API/routes/feed.server.routes.js')(app)
  require('../YB-API/routes/comment.server.routes')(app)

  /* serve static files to ejs Templates */
  app.use(express.static('./public'))

  return app
}
