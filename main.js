var hmacsha1 = require('hmacsha1');

var hash = hmacsha1('hello', 'hello'); //(KEY, DATA)

console.log(hash);