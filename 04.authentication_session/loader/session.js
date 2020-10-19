const session = require('express-session')
const connectRedis = require('connect-redis')
const redisClient = require('../model/redis')
const config = require('../config')


const RedisStore = connectRedis(session())

module.exports = session({
  store: new RedisStore({ client: redisClient }),
  secret: config.cookieSecret,
  saveUninitialized: false,
  resave: false,
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1000 * 60 * 30
  }
})
