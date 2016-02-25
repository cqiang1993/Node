var fs = require('fs');
fs.writeFileSync('msg.txt',new Buffer(129*1024));