// require('dotenv').config();
import 'dotenv/config.js'

// if(process.env.NODE_ENV !== 'production'){
//   require('@babel/register')
// }

const baseDbSetting = {
  username: process.env.DB_USER,
  password: process.env.DB_PW,
  host: process.env.DB_HOST,
};

const development = Object.assign({
  database: process.env.DB_DEV,
  logging: true
}, baseDbSetting);

const test = Object.assign({
  database: process.env.DB_DEV,
  logging: true
}, baseDbSetting);


export default { development, test }
