var http = require('http'),
    path=require('path'),
    url=require('url'),
    services=require('./readServices.js');
    
var servicePath="/services";
    
// Configure our HTTP server to respond with Hello World to all 

var server = http.createServer(function (request, response) { 
  response.writeHead(200, {"Content-Type": "text/plain"}); 
  var pathname = url.parse(request.url).pathname;
  console.log(pathname);
  //var realPath = path.join("assets", pathname);
  //console.log(request);
  var pars={};
  
  console.log('STATUS: ' + request.statusCode);
  console.log('HEADERS: ' + JSON.stringify(request.headers));
  console.log('BODY: ' + JSON.stringify(request.body));
  //获取post数据格式为test=9000
  request.on('data',function(d){
      console.log("Post Data is:"+d);
  })
  if(request.method=="POST"){
      console.log("Request is POST!");
  }
  else if(request.method=="GET"){
      var parStr=((request.url).toString()).split("?");
      if(parStr.length>1){
          var pStrs= parStr[1].split("&");
          for(var i in pStrs){
              var p=pStrs[i],
                  ps=p.split("=");
              pars[ps[0]]=pars[ps[1]];
          }
      }
  }
  console.log(pars);
  
  if(pathname.indexOf(servicePath)>=0){
      var allServices=services.services(),
          sName=pathname.substr(servicePath.length+1),
        singleService=allServices[sName];
      console.log(singleService);
      response.end(JSON.stringify(singleService)); 
  }
  else{
      response.end("Hello World\n"); 
  }
}); 

//process.env.PORT=612;

var port = 6120; 
var hostName = "127.0.0.1"; 

server.listen(port, hostName); 

// Put a friendly message on the terminal 
console.log("port:"+port); 
