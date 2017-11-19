  function playScene(x) {
    var scene = scenes.item(x)
    scene.play()
    scene.style.display = 'inline'
    console.log(scene)
  }
