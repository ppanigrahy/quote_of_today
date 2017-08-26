var http = require('http');
var fs = require('fs');

function home_path(req, res){
  if(req.method == 'GET' && req.url=='/'){
    console.log("Entered home_path");
    res.writeHead(200, {"Content-Type": "text/html"});
    //res.write("Hello Swagatika!!!");
    fs.createReadStream("./quotes.html").pipe(res);
    //res.end();
  }
}

var server = http.createServer(home_path);

var port = process.env.PORT || 3000;
server.listen(port);
console.log("Server started!!!");

/*var route = http.get('/', function(req, res){
  console.log('get called');
  server.sendFile('./abc.txt');
});
*/
