process.env.NODE_ENV = process.env.NODE_ENV || 'development'

var mongoose = require('./config/mongoose')
var express = require('./config/express')
var passport = require('./config/passport')

/* variables needed by routers, models and controllers and middleware */
var db = mongoose()
var app = express()
var passport = passport()

app.listen(3000) /* running the API server */

console.log('🌎 YonnBot API running at http://localhost:3000')
