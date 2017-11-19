const express = require('express');
const socketIO = require('socket.io');
const path = require('path');
const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');
const office = path.join(__dirname, '/views/office.html');
const fridge = path.join(__dirname, '/views/fridge.html');
const mobile = path.join(__dirname, '/views/mobile.html');

const server = express()
  .use(express.static(path.join(__dirname, 'public')))
  .use('/controller', (req, res) => res.sendFile(INDEX))
  .use('/office', (req, res) => res.sendFile(office))
  .use('/fridge', (req, res) => res.sendFile(fridge))
  .use('/mobile', (req, res) => res.sendFile(mobile))
  .use('/stage4', (req, res) => res.sendFile(stage4))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

var track = 0;
var myIndex = 0;
var myArray = [0, 1, 2, 3]

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

function nextElement() {
  track = myArray[myIndex];
  myIndex = (myIndex+1)%(myArray.length);
}
