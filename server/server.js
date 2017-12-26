const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);//websockets server

app.use(express.static(publicPath));

io.on('connection',(socket)=>{
  console.log('New User Connected');

  socket.emit('newMessage',{
    from:'Admin',
    text:'Welcome to chat room'
  });

  socket.broadcast.emit('newMessage',{
    from:'Admin',
    text : 'New user joined',
    createdAt: new Date().getTime()
  });

  socket.on('createMessage',function(message){
     console.log('Create Message',message);
     io.emit('newMessage',{
       from : message.from,
       text : message.text,
       createdAt : new Date().getTime()
     });
     // socket.broadcast.emit('newMessage',{
     //   from : message.from,
     //   etxt : message.text,
     //   createdAt: new Date().getTime()
     // });
  });

  socket.on('disconnect',()=>{
    console.log('client Disconnected');
  });
});

server.listen(port,()=>{
  console.log(`server is up on port ${port}`);
});
