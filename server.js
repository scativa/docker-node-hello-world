var http = require('http')

var port = 4000

var server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.end('docker-node-hello-world: Hello World at port ' + str(port) + '\n')
})

server.listen(port)

console.log('docker-node-hello-world: Server running at http://localhost:' + port)
