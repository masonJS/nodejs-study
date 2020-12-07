const a = require('./a');

console.log('b file log');

exports.helloB = () => {
  a.helloA();
  a.helloA();
}
