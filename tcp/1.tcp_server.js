/**
 * TCP
 **/
 var net = require('net');
 var util = require('util');
 var fs = require('fs');
 var server = net.createServer(function(socket){
	console.log('connected');
 });
 server.listen(8080);