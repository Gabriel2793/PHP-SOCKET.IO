const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

io.on('connection',(socket) => {
  console.log('Connection stablished');

  socket.on('newInscripsion',(data)  => {
    console.log('uno mas');
    io.emit('updateLugares',data);
  });
});

app.get('/',(req,res) => {
  res.send('Hello');
});

server.listen(3000,'0.0.0.0',() => {
  console.log('Server listening to port 3000');
});
