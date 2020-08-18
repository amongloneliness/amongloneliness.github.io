// Array of Songs
var songs = ["RICCI RIFFS  - HEART [в разработке]",
  "RICCI RIFFS  - X [в разработке]"];

// Title of Page
var main_title = document.getElementsByTagName("title")[0];
var backup_main_title = main_title.textContent;
// Song and its properties
var song = new Audio();
var current_song = 0; 
var song_duration = "00:00";
var song_title = document.getElementById("song-title");
var song_slider = document.getElementById("seek-bar");
var song_vol_slider = document.getElementById("volume");
var song_picture = document.getElementById("audio-picture");
var current_time = document.getElementById("current-time");

window.onload = Load();


/* ============ All Functions ============ */
// Update in real time for current song time
song.addEventListener('timeupdate', function () {
  song_slider.value = Math.round(song.currentTime);
  current_time.textContent = ConvertTime(Math.round(song.currentTime)) + " / " + song_duration;

  if (song.ended) {
    Next();
  }
});

// Loding song
function Load() {
  song.src = "../audio-player-for-web-js/audio/" + songs[current_song] + ".mp3";
  song_title.textContent = songs[current_song];
  song_picture.src = "../audio-player-for-web-js/audio/" + songs[current_song] + ".jpg";

  Visible_Transition(song_title, song_picture);

  song_slider.value = 0;

  song.onloadedmetadata = function () {
    song_slider.setAttribute("max", Math.round(this.duration));
    song_duration = ConvertTime(Math.round(this.duration));
    current_time.textContent = "00:00 / " + song_duration;
  }
}

// Convert time to required format
function ConvertTime(seconds) {
  var minutes = Math.floor(seconds / 60);
  var sec = seconds % 60;

  minutes = (minutes < 10) ? "0" + minutes : minutes;
  sec = (sec < 10) ? "0" + sec : sec;

  return minutes + ":" + sec;
}

// Change opacity
function Visible_Transition(obj_1, obj_2) {
  obj_1.classList.toggle("zero-opacity");
  obj_2.classList.toggle("zero-opacity");
}



/* Functions for buttons */
function PauseOrPlay() {
  if (song.paused) {
    song.play();
  } else {
    song.pause();
  }
  document.getElementById("play").classList.toggle("nonactive");
  document.getElementById("pause").classList.toggle("nonactive");
  main_title.textContent = song_title.textContent;
}

function Stop() {
  song.pause();
  song.currentTime = 0;
  document.getElementById("play").classList.value = "play-pause";
  document.getElementById("pause").classList.value = "play-pause nonactive";
  main_title.textContent = backup_main_title;
}

function Next() {
  Visible_Transition(song_title, song_picture);

  song.pause();
  current_song++;
  if (current_song >= songs.length) {
    current_song = 0;
  }

  setTimeout(function () {
    song.pause();
    Play();
    main_title.textContent = song_title.textContent;
  }, 300);
}

function Prev() {
  Visible_Transition(song_title, song_picture);

  song.pause();
  current_song--;
  if (current_song < 0) {
    current_song = songs.length - 1;
  }
  
  setTimeout(function () {
    song.pause();
    Play();
    main_title.textContent = song_title.textContent;
  }, 300);
}

function RewindR() {
  song.currentTime += 2;
}

function RewindL() {
  song.currentTime -= 2;
}

function Play() {
  Load();
  document.getElementById("play").classList.value = "play-pause nonactive";
  document.getElementById("pause").classList.value = "play-pause";
  setTimeout(function () {
    song.play();
  }, 700);
}

function SeekSong() {
  song.currentTime = song_slider.value;
  current_time.textContent = "00:00 / " + song_duration;
}

function VolSong() {
  song.volume = song_vol_slider.value;
}
