const express = require('express');
const socketIO = require('socket.io');
const path = require('path');
const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');
const office = path.join(__dirname, '/views/office.html');
const fridge = path.join(__dirname, '/views/fridge.html');
const mobile = path.join(__dirname, '/views/mobile.html');
const paintingwall = path.join(__dirname, '/views/paintingwall.html');
const test = path.join(__dirname, '/views/test.html');

const server = express()
  .use(express.static(path.join(__dirname, 'public')))
  .use('/test', (req, res) => res.sendFile(test))
  .use('/office', (req, res) => res.sendFile(office))
  .use('/fridge', (req, res) => res.sendFile(fridge))
  .use('/mobile', (req, res) => res.sendFile(mobile))
  .use('/paintingwall', (req, res) => res.sendFile(paintingwall))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

var track = 0;
var myIndex = 0;
var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

const io = socketIO(server);

var myVar = setInterval(myTimer, 10000);

function myTimer() {
      io.emit("stop", track);
      nextElement()
      io.emit("play", track);
} 


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
