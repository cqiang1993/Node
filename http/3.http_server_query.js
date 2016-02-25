var http = require('http');
var url = require('url');
var fs = require('fs');
var util = require('util');
var querystring = require('querystring');

var server = http.createServer();

server.on('request',function(req,res){
	var urlObj = url.parse(req.url,false);
	var pathname = urlObj.pathname;
	req.setEncoding('utf8');
	if(pathname == '/'){
		res.writeHeader(200,{'Content-Type':'text/html;charset=utf8'})
		fs.createReadStream('./get').pipe(res);
	}else if(pathname == '/get'){
		var obj = querystring.parse(urlObj.query);
		for(var attr in obj){
			console.log(attr,decodeURIComponent(obj[attr]));
		}
		res.writeHeader(200,{'Content-Type':'text/html;charset=utf8'})
		res.end(JSON.stringify(obj));
	}else if(pathname == '/post'){
		res.end('post')
	}else{
		res.end('404');
	}
});

server.listen(8080);