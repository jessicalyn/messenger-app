const express = require('express');
const app = express();
const http = require('http');
const server = http.Server(app);
const io = require('socket.io')(server, {
  cors: {
  origin: 'http://localhost:3000',
  methods: ["GET", "POST"],
  credentials: true
  }
});

server.listen(3001, () => {
  console.log('Socket.io server running on port 3001');
});

io.on('connection', (socket) => {
  socket.on('chat message', (message) => {
    socket.broadcast.emit('chat message', message);
  });

  socket.on('user', (name) => {
    socket.broadcast.emit('new user', name);
  });

})
