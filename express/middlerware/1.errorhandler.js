var express = require('express');
var app = express();
app.use(function(req,res,next){
    console.log('user1');
    if(req.username){
        next();
    }else{
        throw Error('use');
        //next();
    }
});
app.use(function(req,res,next){
    console.log('user2');
    next()
});
app.get('/',function(req,res){
    res.send('/');
});
app.get('/us',function(req,res){
    res.send('us');
});
app.get('*',function(req,res){
    res.send('404');
});
//错误处理中间件
app.use(function(err,req,res,next){
    console.error(err);
    res.end('服务器出了些问题，请您一会儿再来');
});
app.listen(8080);
