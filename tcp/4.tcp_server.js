/**
 * TCP
 */
var net = require('net');
var fs = require('fs');
var server = net.createServer();
var out = fs.createWriteStream('./tcp.txt');
//客户端连接事件
server.on('connection',function(socket){

    socket.on('data',function(chunk){
        console.log('已经接收到的%d字节',socket.bytesRead);
        socket.write(chunk);
    });
    //客户端发起end请求时触发
    socket.on('end',function(){
        console.log('end');
    });
    //不论何种原因，只要关闭了都会触发
    socket.on('close',function(){
        console.log('close');
    });
    socket.on('error',function(){
        console.log('error');
        socket.destroy();
    });
});
server.listen(8080);