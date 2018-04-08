const http = require('http');
const fs = require('fs');
const url = require('url');
const express = require('express');

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type':'text/plain'});

  var pathname = url.parse(req.url).pathname;

  fs.readFile(pathname.substr(1), function(err, data){
    if(err){
      console.log(err);
      res.writeHead(404, {'Content-Type':'text/html'});
    }else{
      res.writeHead(200, {'Content-Type':'text/html'});
      res.write(data.toString());
    }
  res.end();
  });
}).listen(8080);

console.log('Server running at 127.0.0.1:8080');
