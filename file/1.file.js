/**
 *  fs filesystem
 **/
var fs = require('fs');
/**
 * 同步的方式
 */
var content = fs.readFileSync('./msg.txt','utf8');
console.log(content);

/**
 * 异步的方式
 * 尽量使用异步的方式，只有要读取文件作为前置条件的时候，
 */
fs.readFile('./fish.txt','utf8',function(err,data){
    console.log(data);
});

fs.readFile('./cucumber.txt','utf8',function(err,data){
    console.log(data);
});


