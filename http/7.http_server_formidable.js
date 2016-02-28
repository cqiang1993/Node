var http = require('http');
var url = require('url');
var fs = require('fs');
var util = require('util');
var querystring = require('querystring');
var formidable = require('formidable');
var server = http.createServer();

server.on('request',function(req,res){
	var urlObj = url.parse(req.url,false);
	var pathname = urlObj.pathname;
	//req.setEncoding('utf8');
	if(pathname == '/'){
		res.writeHeader(200,{'Content-Type':'text/html;charset=utf8'});
		fs.createReadStream('./routes.html').pipe(res);
	}else if(pathname == '/get'){
		var obj = querystring.parse(urlObj.query);
		for(var attr in obj){
			console.log(attr,decodeURIComponent(obj[attr]));
		}
		res.writeHeader(200,{'Content-Type':'text/html;charset=utf8'});
		res.end(JSON.stringify(obj));
	}else if(pathname == '/file'){
        var form = new formidable.IncomingForm();
        form.parse(req,function(err,fields,files){
            fs.createReadStream(files.avatar.path).pipe(fs.createWriteStream(files.avatar.name))
            res.setHeader('Content-Type','text/html');
            res.write('<h1>'+fields.username+'</h1>');
            res.write('<h1>'+fields.email+'</h1>');
            res.write('<img src="'+files['avatar'].name+'"/>');
            res.end();
        })
	}else{
        fs.exists('.'+pathname,function(exists){
            if(exists){
                fs.createReadStream('.'+pathname).pipe(res);
            }else{
                res.end('404');
            }
        });

	}
});

server.listen(8080);