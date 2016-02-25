var fs = require('fs');
/**
 * 可以完整的写入一个文件
 * fs.writeFile
 *
 **/
/*fs.writeFile('./write.txt',new Buffer('第三行'),{flag:'a',econding:'utf8'},function(err,data){
    if(err){
        console.error(err);
    }else{
        console.log('写入成功');
    }
});*/

fs.appendFile('./write.txt',new Buffer('第四行'),{flag:"w"})

/**
 * base64
 * A-Z a-z 0-9 +/
 * 把3个8位字节，转化为4个6位字节，之后在6位前面补两个0，形成8位偿还一个字节的形式
 **/
/*fs.readFile('./abc.png','base64',function(err,data){
    fs.writeFile('./b.png',data,'base64',function(){
        console.log('copy');
    });
});*/
//珠
var buf = new Buffer('珠');
console.log(buf);
//e7 8f a0
//00111001 00111000 00111110 00100000
//十进制 57 56 62 32
//39 38 3e 20
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
console.log(str[57]+str[56]+str[62]+str[32]);
