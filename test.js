var http = require('http'); 
// Configure our HTTP server to respond with Hello World to all 

var server = http.createServer(function (request, response) { 
  response.writeHead(200, {"Content-Type": "text/plain"}); 
  response.end("Hello World\n"); 
}); 

process.env.PORT=12200;

var port = 12200; 
var hostName = "127.0.0.1"; 

server.listen(port, hostName); 

// Put a friendly message on the terminal 
console.log("port:"+port); 