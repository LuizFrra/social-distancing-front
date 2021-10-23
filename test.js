// create a express server
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

var port = process.env.PORT || 3000;

// serve static files
app.use(express.static(__dirname + '/public'));

// serve index page
app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html');
});

// listen on port
server.listen(port, function(){
  console.log('Listening on port ' + port);
});

// when a user connects
io.sockets.on('connection', function(socket){

  // send a message to the client
  socket.emit('message', 'Welcome to the chat');

  // listen for messages from the client
  socket.on('message', function(msg){
    console.log('message: ' + msg);

    // send the message to all clients
    io.sockets.emit('message', msg);
  });
});
