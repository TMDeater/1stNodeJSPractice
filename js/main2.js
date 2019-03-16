var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;

  // http://localhost:8080/default.htm?year=2017&month=february
  // console.log(q.host); //returns 'localhost:8080'
  // console.log(q.pathname); //returns '/default.htm'
  // console.log(q.search); //returns '?year=2017&month=february'

  //http://localhost:8080/?year=2017&month=July
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);
