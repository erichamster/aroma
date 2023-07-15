var http = require('http');

const server = http.createServer(function (request, response) {
  console.log('URL: '  + request.url);
  console.log('Method: ' + request.method);
  console.log("Header: ");
  console.log(request.headers);
  response.end('Hello');
})

server.listen(9999, function () {
  console.log("port 9999: FVCL YOU!");
})