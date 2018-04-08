const http = require('http');
var app = require('./support.js');

http.createServer(app.handleRequest).listen(8080, function(req, res){
  console.log('Server is running on port 8080');
});
