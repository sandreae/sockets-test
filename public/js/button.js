  button.addEventListener('click', function(){
	  for(var i = 0; i < scenes.length; i++) {
	    var scene = scenes.item(i)
	    scene.play()
	    scene.pause()
	    console.log("Scene " + i + " tested")
	  }
    button.style.display = "none"
  });
