var http = require('http');
var app = require('./server.js');

// récupération du port
var port = process.env.PORT || '3000';
app.set('port', port);

// init du server
var server = http.createServer(app);

// écoute
server.listen(port);
console.log('server listening on port '+port);