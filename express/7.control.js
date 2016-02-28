/**
 * cookie session
 */
var express = require('express');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var expressSession = require('express-session');
var connectMongo = require('connect-mongo');
var MongoStore = require('connect-mongo')(expressSession);
var app = express();
//app.use(cookieParser());
app.use(expressSession({
    secret:'zfpxkey',
    store:new MongoStore({
        url:'mongodb://localhost/test-app'
    })
}));
app.get('/login',function(req,res){
    if(1){
        req.session.name = 'zxpx';
        res.send('hello');
    }
    //req.session.age = 6;
    //req.setHeader('Set-Cookie',"express:sess="+JSON.stringify({name:'zfpx'}).toString())
});
app.get('/home',function(req,res){
    if(req.session.name){
        res.send(req.session.name+' 欢迎你');
    }else{
        res.send('你还没登录,请登录吧！');
    }
});
app.get('/logout',function(req,res){
    req.session.name = null;
    res.send('您已退出登录');
});
app.listen(8080);
