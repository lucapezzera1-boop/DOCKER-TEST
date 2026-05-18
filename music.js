const audio = document.createElement("audio");

const videoIntro = document.getElementById("ssbm-intro");

const playButton1 = document.getElementById("meleemusicplayer");
const playButton2 = document.getElementById("slippimusicplayer");
const playButton3 = document.getElementById("marthmusicplayer");
const playButton4 = document.getElementById("pokemonmusicplayer");
playButton1.addEventListener("click", playMusic1);
playButton2.addEventListener("click", playMusic2);
playButton3.addEventListener("click", playMusic3);
playButton4.addEventListener("click", playMusic4);

function playMusic1() {
    videoIntro.innerHTML = '<video width="100%" height="100%" controls><source src="Assets/Music/ssbm-intro.mp4" type="video/mp4"></video>';
    videoIntro.id = "ssbm-intro-playing";
    videoIntro.play();
}
function playMusic2() {
    audio.src = "Assets/Music/slippi-music.mp3";
    audio.play();
}
function playMusic3() {
    audio.src = "Assets/Music/fire-emblem-music.mp3";
    audio.play();
}
function playMusic4() {
    audio.src = "Assets/Music/pokemon-music.mp3";
    audio.play();
}