import path from 'path';
import mongoose from 'mongoose';
import Config from '../configs/mongoose.js';
// const moduleURL = new URL(import.meta.url);
// const config = require(path.dirname(moduleURL.pathname) + '../configs/mongoose.js')[process.env.NODE_ENV];
const config = Config[process.env.NODE_ENV];

const connect = () => {
  if(process.env.NODE_ENV !== 'production'){
    mongoose.set('debug', true)
  }
  mongoose.connect(`mongodb://${config.username}:${config.password}@${config.host}:27017/admin`, {
    dbName: config.database,
    useNewUrlParser: true,
    useCreateIndex: true
  }, (error) => {
    error ? console.error('mongodb connection error: ', error) : console.log('success connection mongodb');
  });
}

mongoose.connection.on('error', (error) => {
  console.error('mongodb connection error: ', error);
})

mongoose.connection.on('disconnected', (error) => {
  console.error('try to reConnection mongodb');
  connect();
})

export default connect;

