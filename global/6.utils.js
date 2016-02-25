var utils = require('util');
/**
 *这是一个基于对象间原型继承的函数。
 *
 **/
console.log(utils.inspect({name:'zfpx'}));

console.log(utils.isArray([]));
console.log(utils.isRegExp(/\d/));
console.log(utils.isDate(new Date()));
console.log(utils.isError(new Error));