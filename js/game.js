/** Draw the Game on the Webpage */
let canvas;
/** Set the world what can be interact with */
let world;
/** Keybind for the movement of the character */
let keyboard = new Keyboard();
/**  */
let isFullscreen = false;
/** To check if the game was already started */
let restartable = false;
/** To check if the sound is muted */
let soundIsMuted = true;
/** Binds the volume id of the HTML-Element */
let vol;

/** If the menu is opened the Game will be started, else you will source to the menu. */
function start() {
   toggleIntroElements();
   if (!restartable) {
      startTheGame();
      restartable = true;
   } else {
      removeGameOverElements();
      restartable = false;
   }
}

/** Bind and toggle the intro elements */
function toggleIntroElements() {
   let intro = document.getElementById('intro');
   let startGame = document.getElementById('startGame');
   intro.classList.toggle('d-none');
   startGame.classList.toggle('d-none');
}

/** Bind and hide the game over elements */
function removeGameOverElements() {
   let gameOver = document.getElementById('gameOver');
   let backToMenu = document.getElementById('backToMenu');
   gameOver.classList.add('d-none');
   backToMenu.classList.add('d-none');
}

/** Starts the game and sets the volume */
function startTheGame() {
   // settedIntervals();
   init();
   volume();
}

/** Mutes or unmutes all sounds there are exist */
function volume() {
   vol = document.getElementById('volume');
   for (let i = 0; i < sounds.length; i++) {
      const sound = sounds[i];
      if (soundIsMuted) {
         muteSound(sound);
      } else {
         unmuteSound(sound);
      }
   }
}

/** Mutes the current sound */
function muteSound(sound) {
   vol.src = 'assets/png/mute.png';
   sound.muted = true;
   playMusic();
}

/** Unmutes the current sound */
function unmuteSound(sound) {
   vol.src = 'assets/png/volume.png';
   sound.volume = 0.2;
   sound.muted = false;
   playMusic();
}

/** Plays the backgroundmusic */
function playMusic() {
   music.volume = 0.03;
   music.play();
}

/** Starts the game */
function init() {
   initLevel();
   canvas = document.getElementById('canvas');
   world = new World(canvas, keyboard);
}

/** Sets or quits the fullscreen */
function toggleFullscreen() {
   if (!isFullscreen) {
      fullscreen();
   } else {
      quitFullscreen();
   }
}

/** Shows and hides the 'Key Assignments' */
function info() {
   document.getElementById('description').classList.toggle('d-none');
}

/** Sets the fullscreen */
function fullscreen() {
   document.getElementById('game').requestFullscreen();
   isFullscreen = true;
}

/** Quits the fullscreen */
function quitFullscreen() {
   document.exitFullscreen();
   isFullscreen = false;
}