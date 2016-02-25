var Transform = require('stream').Transform;
var util = require('util');
var fs = require('fs');
util.inherits(ChangeTrans,Transform);

function ChangeTrans(){
    Transform.call(this);
}
ChangeTrans.prototype._transform = function(data){
    for(var i=0;i<data.length;i++){
        data[i] = 255-data[i];
    }
    this.push(data);
    this.push(null);
}
var change = new ChangeTrans();
fs.createReadStream('./pwd.txt').pipe(change)
    .pipe(fs.createWriteStream('./re-pwd.txt'))