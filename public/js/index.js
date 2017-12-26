var socket = io();//because of library openening a request

socket.on('connect',function(){
  console.log('Connected to server');

  socket.emit('createMessage',{
    from : 'Deepanshu',
    text : 'anything'
  });
});

socket.on('disconnect',function(){
  console.log('Disconnected from server');
});


socket.on('newEmail',function(email){
  console.log('New Email : ',email);
});

socket.on('newMessage',function(message){
  console.log('newMessage',message);
});