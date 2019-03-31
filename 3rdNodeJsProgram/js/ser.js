var nodemailer = require('nodemailer');
var http = require('http');
var fs = require('fs');
var qs = require('querystring');

http.createServer(function (req, res) {
  if (req.url == '/postdata'){
    let body = '';
    req.on('data',function(data){
      body+=data;
    });
    req.on('end',function(){
      var post = qs.parse(body);
      console.log(post.from_email);
      console.log(post.send_to);
      sendEmail(post.from_email,post.pwd,post.send_to);
      res.end('Email had been sent to '+post.send_to);
    });
  } else {
    fs.readFile('html/index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
}).listen(8080);

function sendEmail(from, pwd, to){
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: from,
      pass: pwd
    }
  });

  var mailOptions = {
    from: from,
    to: to,
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
