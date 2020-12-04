// require은 최상단에 있을필욘 없지만 import는 최상단에 위치
const dep1 = require('./dep1');
const dep2 = require('./dep2');

dep1();
dep2();
