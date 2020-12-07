const a = require('./a');

exports.helloB = () => {
  console.log('hello', a.name)
}
