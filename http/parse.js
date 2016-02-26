var url = require('url');
module.exports = function(req){
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    req.pathname = urlObj.pathname;
    req.query = urlObj.query
};