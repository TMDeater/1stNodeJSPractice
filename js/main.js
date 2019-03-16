var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  //read html file
  fs.readFile('html/demofile.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);

//append text to file
fs.appendFile('text/mytextfile.txt', 'This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});
