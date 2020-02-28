'use strict';
const client= require('socket.io-client');
const collegeChannel = client.connect('http://localhost:3000/college');
collegeChannel.emit('join','student');
setInterval(()=>labSubmissions(),1000);
const labSubmissions= () =>{
  const lab = Math.floor(Math.random()*100);
  collegeChannel.emit('submission',`lab : ${lab}`);
};
collegeChannel.on('graded',payload =>{
  console.log(payload);
});

