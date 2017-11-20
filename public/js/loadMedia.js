function loadMedia(videoFiles, audioFiles, imageFiles) {  
  videoFiles.forEach(function(file){
    var video = document.createElement('video');
    video.src = '/videos/' + file + '.mp4';
    video.className = 'media'
    video.autoPlay = false;
    video.id = file + '-video'
    video.loop = true;
    video.playsinline = true
    document.body.appendChild(video);
    video.load()
  })
  audioFiles.forEach(function(file){
    var audio = document.createElement('audio');
    audio.src = '/audio/' + file + '.mp3';
    audio.autoPlay = false;
    audio.className = 'media'
    audio.id = file + '-audio'
    audio.loop = true;
    audio.playsinline = true
    document.body.appendChild(audio);
    audio.load()
  })
  imageFiles.forEach(function(file){
    var video = document.createElement('video');
    video.poster = '/images/' + file + '.png';
    video.className = 'media'
    video.autoPlay = false;
    video.id = file + '-image'
    video.loop = true;
    video.playsinline = true
    document.body.appendChild(video);
    video.load()
  })
}
