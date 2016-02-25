var fs = require('fs')
var buff = new Buffer(1024*129);
buff.fill('0');
fs.writeFile('./tcp.txt',buff);