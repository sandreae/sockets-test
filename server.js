const express = require('express');
const socketIO = require('socket.io');
const path = require('path');
const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');

const server = express()
  .use(express.static(path.join(__dirname, 'public')))
  .use((req, res) => res.sendFile(INDEX))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


var track = 0;
var myIndex = 0;
var myArray = [0, 1]

function nextElement() {
  track = myArray[myIndex];
  myIndex = (myIndex+1)%(myArray.length);
 }

const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('bang', function(){
  	console.log('bang');
      io.emit("stop", track);
      nextElement()
      io.emit("play", track);
  });
  socket.on('disconnect', () => console.log('Client disconnected'));
});

setInterval(() => io.emit('time', new Date().toTimeString()), 1000);