const fs = require('fs');

console.log('before: ', process.memoryUsage().rss);

const data = fs.readFileSync('./big.txt');
fs.writeFileSync('./buffer-memory.txt', data);

console.log('buffer: ', process.memoryUsage().rss);
