var express = require('express');
var app = express();
app.get('/',function(req,res){
    res.send('/');
});
app.get('/us/:username',function(req,res){
    console.log(req.query);
    console.log(req.params.username);
    res.setHeader('Content-Type','text/html;charset=utf8');
    //res.send('关于我们');
    //res.send(404);
    //res.send({name:'zfpx'});
    //res.json({name:'zfpx'});
    res.send([1,2,3]);
});
app.all('*',function(req,res){
    res.send('404');
});
app.listen(8080);
