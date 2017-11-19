  button.addEventListener('click', function(){
	  for(var i = 0; i < videoScenes.length; i++) {
	    var videoScene = videoScenes.item(i)
	    videoScene.style.display = 'inline'
	    videoScene.load()
	    console.log("Scene " + i + " tested")
	  }
	  for(var i = 0; i < audioScenes.length; i++) {
	    var audioScene = audioScenes.item(i)
	    audioScene.style.display = 'inline'
	    audioScene.load()
	    console.log("Scene " + i + " tested")
	  }
    button.style.display = "none"
  });
