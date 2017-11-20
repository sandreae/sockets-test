  function playScene(x) {
    var scene = scenes[x]
    console.log('play: ', scene)
    var video = media.namedItem(scene.video)
    console.log('play: ', video)
    video.play()
    video.style.display = 'inline'
    var audio = media.namedItem(scene.audio)
    console.log('play: ', audio)
    audio.play()
    audio.style.display = 'inline'
  }
