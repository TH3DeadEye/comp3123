/*
Run a node.js file on the command line via the localhost 127.0.0.1
without needing an HTML file

*/

var http = require('http')
// Remember callback functions best written in arrow syntax
http.createServer((request, response) => {
    response.writeHead(200, {'Content-type':'text/html'})
    response.end("Hello world - the server is up and running")
}).listen(8000)