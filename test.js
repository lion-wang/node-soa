var http = require('http'); 
var path=require('path');
var url=require('url');
// Configure our HTTP server to respond with Hello World to all 

var server = http.createServer(function (request, response) { 
  response.writeHead(200, {"Content-Type": "text/plain"}); 
  var pathname = url.parse(request.url).pathname;
  console.log(pathname);
  var realPath = path.join("assets", pathname);
  console.log(realPath);
  response.end("Hello World\n"); 
}); 

//process.env.PORT=612;

var port = 6120; 
var hostName = "127.0.0.1"; 

server.listen(port, hostName); 

// Put a friendly message on the terminal 
console.log("port:"+port); 