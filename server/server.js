const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);//websockets server

app.use(express.static(publicPath));

io.on('connection',(socket)=>{
  console.log('New User Connected');

  socket.emit('newMessage',generateMessage('Admin','Welcome to chat room'));

  socket.broadcast.emit('newMessage',generateMessage('Admin','New user joined'));

  socket.on('createMessage',function(message){
     console.log('Create Message',message);
     io.emit('newMessage',generateMessage(message.from,message.text));
  });

  socket.on('disconnect',()=>{
    console.log('client Disconnected');
  });
});

server.listen(port,()=>{
  console.log(`server is up on port ${port}`);
});
