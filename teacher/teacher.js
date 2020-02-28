'use strict';
const client = require('socket.io-client');
const collegeChannel = client.connect('http://localhost:3000/college');
collegeChannel.emit('join','teacher');
collegeChannel.on('submission',payload =>{
  let grade = Math.floor(Math.random()*11);
  collegeChannel.emit('graded',{assigement:`${payload}`,grade : `${grade}`});
});