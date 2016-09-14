var http = require('http'),
    fs = require('fs'),
    path = require('path'),
    util = require('util');

var server = http.createServer(function(req, res) {
  var url = req.url;

  function readFile(filename, type) {
    fs.readFile(filename, function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/' + type })
      res.write(data.toString());
      res.end();
    })
  }


  //load in all the files needed
  if(url === "/") readFile("index.html", "html");
  else if (url === "/css/circles.css") readFile("./css/circles.css", "css");
  else if (url === "/js/app.js") readFile("./js/app.js", "javascript");
  else if (url === "/js/keyData.js") readFile("./js/keyData.js", "javascript");
  else if (url === "/js/lib/paper-full.js") readFile("./js/lib/paper-full.js", "paperscript");
  else if(url.substring(0, 8) === "/sounds/"){
    
    // load all sound files when called
    var filePath = '.'+ url;
    var stat = fs.statSync(filePath);

    res.writeHead(200, {
      'Content-Type': 'audio/mpeg',
      'Content-Length': stat.size
    });

    var readStream = fs.createReadStream(filePath);
    readStream.pipe(res)
  }



})

server.listen(3000, function() {
  console.log("Padatap is listening to port 3000")
})