  function stopScene(x) {
    var audioScene = audioScenes.item(x)
    audioScene.pause()
    audioScene.style.display = 'none'
    console.log(audioScene)
    var videoScene = videoScenes.item(x)
    videoScene.pause()
    videoScene.style.display = 'none'
    console.log(videoScene)
  }
