  function stopScene(x) {
    var scene = scenes.item(x)
    scene.style.display = 'none'
    scene.pause()
    console.log(scene)
  }
