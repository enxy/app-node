
var fs = require('fs');
var url = require('url');

function renderHTML(path, response){
  fs.readFile(path, function(error, data){
    if(error){
      response.writeHead(404);
      response.write('Page not found!');
    }else{
      response.write(data);
    }
    response.end();
  });
};

module.exports = {
  handleRequest: function(request, response){
    response.writeHead(200, { 'Content-Type': 'tetx/html'});

    var path = url.parse(request.url).pathname;
    switch(path){
      case '/':
         renderHTML('./views/in.html', response);
         break;
      case '/login':
         renderHTML('./views/login.html', response);
         break;
      default:
         response.writeHead(404);
         response.write('Route not found');
         response.end();
    }
  }
}
