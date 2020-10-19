const express= require('express')
const api = require('./api')
const session = require('./loader/session')
const cors = require('./loader/cors')
const config = require('./config')

const app = express()

app.set('port', config.port || 3000)
app.use(express.json())

app.use(cors)
app.use(session)
app.use(api)
app.listen(app.get('port'), () => console.log(`server is running on port ${app.get('port')}`))
