const musicFile = "song.mp3";
const musicToggle = document.getElementById("music-toggle");
const audio = new Audio();

musicToggle.addEventListener("click", () => {
  if (audio.paused) {
    audio.src = musicFile;
    audio.play();
    musicToggle.innerHTML = "Stop Music";
  } else {
    audio.pause();
    musicToggle.innerHTML = "Play Music";
  }
});
