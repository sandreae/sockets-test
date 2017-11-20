  function stopScene(x) {
    var scene = scenes[x]
    console.log('stop: ', scene)
    var video = media.namedItem(scene.video)
    console.log('stop: ', video)
    video.pause()
    video.style.display = 'none'
    var audio = media.namedItem(scene.audio)
    console.log('stop: ', audio)
    audio.pause()
    audio.style.display = 'none'
  }
