var http = require('http');
var url = require('url');
var fs = require('fs');
var util = require('util');
var querystring = require('querystring');
var types = {
    'image/jpeg':'.jpg'
}

var server = http.createServer();

server.on('request',function(req,res){
	var urlObj = url.parse(req.url,false);
	var pathname = urlObj.pathname;
	//req.setEncoding('utf8');
	if(pathname == '/'){
		res.writeHeader(200,{'Content-Type':'text/html;charset=utf8'})
		fs.createReadStream('./index.html').pipe(res);
	}else if(pathname == '/get'){
		var obj = querystring.parse(urlObj.query);
		for(var attr in obj){
			console.log(attr,decodeURIComponent(obj[attr]));
		}
		res.writeHeader(200,{'Content-Type':'text/html;charset=utf8'})
		res.end(JSON.stringify(obj));
	}else if(pathname == '/file'){
        req.pipe(fs.createWriteStream('./form.txt'));
        var buffers = [];
        req.on('data',function(chunk){
            buffers.push(chunk);
        });
        req.on('end',function(){
            var final = Buffer.concat(buffers);
            var status = 'SEP';
            var sep = []; //存放分隔符
            var field = [];//存放当前字段
            var value = [];//存放当前value
            var body = {};
            for (var i = 0; i<final.length;i++){
                if(final[i]==0x0d&&final[i+1]==0x0a){
                    if(status == 'SEP'){
                        i++;
                        status='FIELD';
                    }else if(status == 'FIELD'){
                        if(final.slice(i+2,i+14).toString()=="Content-Type"){
                            i++;
                        }else{
                            i+=3;
                            status = "VALUE";
                        }
                    }else if(status == "VALUE"){
                        var fieldname = /name="(\w+)"/.exec(new Buffer(field).toString())[1];
                        var contentType = /Content-Type: ((\w|\/)+)/.exec(new Buffer(field).toString());
                        if(contentType){
                            contentType = contentType[1];
                            var fName =  ''+Date.now()+(types[contentType]);
                            fs.writeFileSync(fName,new Buffer(value));
                            body[fieldname] = {
                                name:fName,
                                type:contentType,
                                path:fName
                            };
                        }else{
                            body[fieldname] = new Buffer(value).toString();
                        }
                        i++;
                        status='SEP'
                        sep.length = 0;
                        field.length = 0;
                        value.length = 0;
                    }
                }else{
                    if(status == 'SEP'){
                        sep.push(final[i]);
                    }else if(status == 'FIELD'){
                        field.push(final[i]);
                    }else if(status == "VALUE"){
                        value.push(final[i]);
                    }
                }
            }
            res.end(JSON.stringify(body));
        });
	}else{
		res.end('404');
	}
});

server.listen(8080);