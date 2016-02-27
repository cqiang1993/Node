var url = require('url');
module.exports = function(req){
    var urlObj = url.parse(req.url,true);
    req.pathname = urlObj.pathname;
    req.cookie = req.headers.cookie;
    req.query = urlObj.query;
}