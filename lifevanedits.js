function lveshowVideo() {
    var lveImageContainer = document.getElementById('lveImageContainer');
    var lveVideoContainer = document.getElementById('lveVideoContainer');
    var lveVideo = document.getElementById('video');
    
    lveImageContainer.style.display = 'none';
    lveVideoContainer.style.display = 'block';
    lveVideo.play();

    lveVideo.addEventListener('blur', function() {
        lvehideVideo();
    });
}
  
function lvehideVideo() {
    var lveImageContainer = document.getElementById('lveImageContainer');
    var lveVideoContainer = document.getElementById('lveVideoContainer');
    var lveVideo = document.getElementById('video');
    
    lveVideo.pause();
    lveVideo.currentTime = 0;
    lveVideoContainer.style.display = 'none';
    lveImageContainer.style.display = 'block';
}