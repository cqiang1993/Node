/**
 * TCP
 */
var net = require('net');
var fs = require('fs');
var count = 0;
var server = net.createServer();
var out = fs.createWriteStream('./tcp'+count+'.txt');
out.on('finished',function(){
    console.log('finished')
});
var sockets = [];
server.on('connection',function(socket){
    //console.log(socket);
    socket.setEncoding('utf8');
    sockets.push(socket);
    var stat = fs.statSync('./tcp'+count+'.txt');
    if(stat.size>10){
        count++;
        sockets.forEach(function(s){
            s.unpipe(out);//解绑原来的输出流
            out = fs.createWriteStream('./tcp'+count+'.txt');
            s.pipe(out,{end:false});//指向新的输出流
        });
    }else{
        socket.pipe(out,{end:false});
    }
    console.log('connected');


    socket.on('end',function(){
        console.log('end');
    });
    socket.on('error',function(){
        console.log('error');
        socket.destroy();
    });
    setTimeout(function(){
        server.unref();
    },10000)
});
server.listen(8080);