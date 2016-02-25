//var a = require('./a.js');
//var c = require('./c');
//var d = require('./d') //不识别jso文件后缀名，会报错
//var e = require('e');
//console.log(require);
/**
 * id ID
 * exports 导出对象
 * parent 它依赖的模块
 * filename 模块文件名
 * loaded 是否加载成功
 * children 被哪些模块所依赖
 * paths
 */
var a = require('./a');
/*var a = require('../module/a');*/
//console.log(module);
/*{key:value}
{'模块的绝对路径':{module}}*/
console.log(require.cache[require.resolve('./b')].children[0]);
