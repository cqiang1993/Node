var express = require('express');
var app = express();
app.get('/',function(req,res){
    res.send('/');
});
app.get('/us',function(req,res){
    res.send('us');
});
app.get('*',function(req,res){
    res.send('404');
});
app.listen(8080);
