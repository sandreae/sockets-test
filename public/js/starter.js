const socket = io()
var media
const button = document.getElementById('start')
button.addEventListener('click', function(){
  loadMedia(videoFiles, audioFiles, imageFiles)
  media = document.getElementsByClassName("media")
  console.log(media)
})
window.addEventListener('keydown', function(event){
  if (event.keyCode == 32){
    socket.emit('bang')
  }
})