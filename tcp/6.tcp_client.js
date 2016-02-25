var net = require('net');
var util = require('util');

var socket = new net.Socket();
socket.setEncoding('utf8');

socket.connect(8080,'127.0.0.1',function(){
    console.log(socket.remoteAddress,socket.remotePort);
    socket.write('你好');
    setTimeout(function(){
        socket.end('坏蛋')
    },3000);
});
socket.on('data',function(data){
    console.log('接受到服务器传过来的数据:'+data);
});
socket.on('error',function(err){
    console.log(err);
});
