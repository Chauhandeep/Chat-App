var socket = io();//because of library openening a request

socket.on('connect',function(){
  console.log('Connected to server');

});

socket.on('disconnect',function(){
  console.log('Disconnected from server');
});


socket.on('newMessage',function(message){
  console.log('newMessage',message);
});
