function loadScenes() {
  for(var i = 0; i < audioScenes.length; i++) {
    var scene = scenes.item(i)
    scene.load()
    console.log("Scene " + i + " loading")
  }
  for(var i = 0; i < videoScenes.length; i++) {
    var scene = scenes.item(i)
    scene.load()
    console.log("Scene " + i + " loading")
  }
}
