var express = require('express');
var fs = require('fs');
var buf = new Buffer(100);
 
var app = express.createServer(express.logger());
var inputFile = './index.html';

app.get('/', function(request, response) {
    buf = fs.readFileSync(inputFile, 'utf-8');
    response.send(buf);
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
