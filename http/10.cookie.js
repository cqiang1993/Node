/**
 * cookie是服务器向客户端发送的一段文本
 * 1.服务器发给客户端 Set-Cookie 的Header
 * 2.客户端以key-value的形式进行保存（内存或硬盘）
 * 3.以后每次请求的时候，客户端会有选择的把保存的cookie发给服务器
 *   Cookie:name=zfpx; age=6; gender=man
 *   它的目的是让服务器能够在多个HTTP请求之间跟踪客户端
 *   cookie本质上就是一个header值
 *
 *
 **/
/**
 * 设置cookie的标准格式 name=zpfx;path=/;domain=localhost;
 * Domain localhost
 *   指定cookie被发送到哪些服务器上。默认情况下，只发送写cookie的服务器上
 * Path /
 *   控制哪些路径 能够发送cookie,如果没有指定，默认是/,对此域名下所有的路径都可以访问
 * Expires/Max-Age Session(表示存放在浏览器内存中，关闭浏览器就会销毁)
 *
 * HTTP 只能在http里面看到，不能通过document.cookie访问
 * Secure 只能用在https里面
 */

var http = require('http');
var parse = require('./parse');
var SET_COOKIE = 'Set-Cookie';
http.createServer(function(req,res){
    parse(req);
    if(req.pathname == '/favicon.ico'){
        res.end('404');
    }else if(req.pathname == '/write'){
        //res.setHeader(SET_COOKIE,['name=zfpx; domain=a.zfpx.cn; path=/write; HTTP']);
        res.setHeader(SET_COOKIE,['name=zfpx; path=/read; HttpOnly; Max-Age=60 ']);
        res.end('hello');
    }else if(req.pathname == '/read'){
        res.end(req.headers.cookie);
    }else if(req.pathname == '/read1'){
        res.end(req.headers.cookie);
    }else{
        res.end('404');
    }

}).listen(8080);