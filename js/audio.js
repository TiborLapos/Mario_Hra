let on_off = document.querySelector('.container .title');
let audio = document.querySelector('.musicOn audio');
//var vid = document.getElementById("audio")//.autoplay;
//vid.autoplay = false;



function setHalfVolume() { 
    audio.volume = 0.2;
  } 

function stopMusic() {
    audio.pause()
   }

function playMusic() {
    //audio.play()
}