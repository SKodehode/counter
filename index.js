
const playButton = document.getElementById('playButton');
const audioElement = document.getElementById('audioElement');
const clickCountElement = document.getElementById("clickCount")

let clickCount = localStorage.getItem('clickCount');
if (clickCount) {
  clickCountElement.textContent = clickCount;
}

playButton.addEventListener('click', function() {
    if (audioElement.paused) {
      audioElement.play();
    } else {
      audioElement.currentTime = 0;
    }
    clickCount++;
    clickCountElement.textContent = clickCount;
    localStorage.setItem('clickCount', clickCount);
});