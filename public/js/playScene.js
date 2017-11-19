  function playScene(x) {
    var audioScene = audioScenes.item(x)
    audioScene.play()
    audioScene.style.display = 'inline'
    console.log(audioScene)
    var videoScene = videoScenes.item(x)
    videoScene.play()
    videoScene.style.display = 'inline'
    console.log(videoScene)
  }
