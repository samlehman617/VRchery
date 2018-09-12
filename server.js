var http = require('http');
var server = http.createServer(function(req, res) {
	res.writeHead(200, {"Content-Type": "text/html"});
	res.write("<doctype html><html><head>VRchery</head><body>VRchery</body></html>");
	res.end();
});
server.listen(8080);
