const mongoose = require('mongoose');

const connect = () => {
  if(process.env.NODE_ENV !== 'production'){
    mongoose.set('debug', true)
  }
  mongoose.connect('mongodb://root:dmlrh1303!@localhost:27017/admin', {
    dbName: 'nodejs',
    useNewUrlParser: true,
    useCreateIndex: true
  }, (error) => {
    error ? console.error('mongodb connection error: ', error) : console.log('success connection mongodb');
  });
}
mongoose.connection.on('error', (error) => {
  console.error('mongodb connection error: ', error);
})

mongoose.connection.on('disconnected', () => {
  console.error('try to reConnection mongodb');
  connect();
})

module.exports = connect;
