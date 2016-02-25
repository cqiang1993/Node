/**
 * TCP
 */
var net = require('net');
var fs = require('fs');
var server = net.createServer();

server.on('connection',function(socket){
    console.log(socket.remoteAddress,socket.remotePort,socket.localAddress,socket.localPort);
    console.log('a new connection');
    socket.setEncoding('utf8');
    var rs = fs.createReadStream('./tcp.txt');
    rs.on('data',function(chunk){
        var flag = socket.write(chunk);
        console.log('flag:'+flag);
        console.log('当前缓存队列中缓存了%d字符',socket.bufferSize);
    });
    socket.on('drain',function(chunk){
        console.log('TCP缓存区里面的数据发送完毕');
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