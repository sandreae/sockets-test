  socket.on('play', function (x) {
    console.log("play: " + x)
    playScene(x)
  });
  socket.on('stop', function (x) {
    console.log("stop: " + x)
    stopScene(x)
  });
