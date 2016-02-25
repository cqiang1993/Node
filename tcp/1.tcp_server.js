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
})
server.on('connection',function(socket){
    //console.log(socket);
    socket.setEncoding('utf8')
    console.log('connected');
    socket.pipe(out,{end:false});
    /*socket.on('data',function(chunk){
        console.log(chunk)
        socket.write("server:"+chunk);
    });*/
    socket.on('end',function(){
        console.log('end');
    });
    socket.on('error',function(){
        console.log('error');
        socket.destroy();
    });
});
server.listen(8080);