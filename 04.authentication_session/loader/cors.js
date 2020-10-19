const cors = require('cors')

const whiteList = new Set(['http://localhost'])
const corsOptions = {
  optionsSuccessStatus: 200,
  origin: function(origin, callback) {
    whiteList.has(origin) ? callback(null, true) : callback(new Error('Not allowed by CORS'))
  },
  credentials: true
}

module.exports = cors(corsOptions)
