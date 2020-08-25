const http = require('http')
const forward = require('http-forward')
 
var server = http.createServer(function (req, res) {
  req.forward = { target: 'http://localhost:3002' }
  forward(req, res)
})
 
server.listen(3003)