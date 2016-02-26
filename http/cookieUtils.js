//
exports.serialize = function(name,value,options){
    return name+"="+value+'; '+options
};

//客户端提交上来的cookie 转成对象 name=zfpx; age=6
exports.parse = function(str){
    var obj = new Object(str);
    return obj;
};