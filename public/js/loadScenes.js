function loadScenes() {
  for(var i = 0; i < scenes.length; i++) {
    var scene = scenes.item(i)
    scene.load()
    console.log("Scene " + i + " loading")
  }
}
