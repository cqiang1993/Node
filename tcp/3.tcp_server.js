/**
 * TCP
 */
var net = require('net');
var fs = require('fs');
var server = net.createServer();
var out = fs.createWriteStream('./tcp.txt');
server.on('connection',function(socket){
    /*socket.pause();
    setTimeout(function(){
        socket.resume();
        socket.pipe(out,{end:false});
    },5000);*/
    //input keydown
    socket.setTimeout(10*1000);//设置超时时间
    socket.pause();
    socket.on('timeout',function(){
        socket.resume();
        socket.pipe(out);
    });
    socket.on('data',function(){
        socket.pause();
    });
    socket.on('end',function(){
        console.log('end');
    });
    socket.on('error',function(){
        console.log('error');
        socket.destroy();
    });
});
server.listen(8080);