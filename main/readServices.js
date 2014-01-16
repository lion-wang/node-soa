var fs = require('fs'),
    basePath=process.cwd(),
    baseService=basePath+'/services/',
    configPath=basePath+'/config/',
    serviceName='db2db',
    servicePath=baseService+serviceName+'/',
    _services={};

console.log(configPath);

var files=fs.readdirSync(configPath);
console.log(files);
for(var i in files){
    var item=files[i],tmpPath = configPath + '/' + item;
    var str = fs.readFileSync(tmpPath,{encoding:'utf8'});
    console.log(str);
    eval(str);
};

fs.readFile(servicePath+'index.json',{encoding:'utf8'},function(err,data){
    if(err){ console.log(err); throw err;}
    eval('var sName='+data);
    _services[sName.name]=sName;
});


exports.services= function() {    
    return _services;
};