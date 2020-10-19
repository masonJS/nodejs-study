const express = require('express')
const router = express.Router()
const authenticate = require('../loader/authenticate')
const authRouter = require('./auth')

router.post('/login', authRouter.login)

// all routes that come after this middleware are protected
// and can only be accessed if the user is logged in
router.use(authenticate)


module.exports = router
