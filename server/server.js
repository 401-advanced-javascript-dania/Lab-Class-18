'use strict';
const client=require('socket.io')(3000);
client.on('connection',socket =>{
  console.log('connection',socket.id);
});
const college = client.of('/college');
college.on('connection',socket =>{
  console.log('college channel' , socket.id);
  socket.on('join' , room =>{
    console.log('join',room);
    socket.join(room);
  });
  socket.on('submission', payload=>{
    college.to('teacher').emit('submission',payload);
  });
  socket.on('graded',payload =>{
    college.to('student').emit('graded',payload);
  });
});