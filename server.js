const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const port = process.env.PORT || 3000;

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

server.listen(port,() => {
  console.log('Server listening to port'+port);
});
