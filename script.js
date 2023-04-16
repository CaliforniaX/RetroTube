function showVideo() {
    var imageContainer = document.getElementById('imageContainer');
    var videoContainer = document.getElementById('videoContainer');
    var video = document.getElementById('video');
    
    imageContainer.style.display = 'none';
    videoContainer.style.display = 'block';
    video.play();

    video.addEventListener('blur', function() {
        hideVideo();
    });
}
  
function hideVideo() {
    var imageContainer = document.getElementById('imageContainer');
    var videoContainer = document.getElementById('videoContainer');
    var video = document.getElementById('video');
    
    video.pause();
    video.currentTime = 0;
    videoContainer.style.display = 'none';
    imageContainer.style.display = 'block';
}