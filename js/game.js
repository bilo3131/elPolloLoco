let canvas;
let world;
let keyboard = new Keyboard();
let isFullscreen = false;
let gameStarted = false;
let mute = false;

window.addEventListener('DOMContentLoaded', function () {
   let left = document.getElementById('left');
   left.addEventListener('touchstart', function (e) {
      if (e.cancelable) {
         e.preventDefault();
      }
      keyboard.LEFT = true;
   });
   left.addEventListener('touchend', function (e) {
      if (e.cancelable) {
         e.preventDefault();
      }
      keyboard.LEFT = false;
   });

   let right = document.getElementById('right');
   right.addEventListener('touchstart', function (e) {
      if (e.cancelable) {
         e.preventDefault();
      }
      keyboard.RIGHT = true;
   });
   right.addEventListener('touchend', function (e) {
      if (e.cancelable) {
         e.preventDefault();
      }
      keyboard.RIGHT = false;
   });

   let jump = document.getElementById('jump');
   jump.addEventListener('touchstart', function (e) {
      if (e.cancelable) {
         e.preventDefault();
      }
      keyboard.SPACE = true;
   });
   jump.addEventListener('touchend', function (e) {
      if (e.cancelable) {
         e.preventDefault();
      }
      keyboard.SPACE = false;
   });

   let throwing = document.getElementById('throwing');
   throwing.addEventListener('touchstart', function (e) {
      if (e.cancelable) {
         e.preventDefault();
      }
      keyboard.D = true;
   });
   throwing.addEventListener('touchend', function (e) {
      keyboard.D = false;
   });

   let information = document.getElementById('info');
   information.addEventListener('touchstart', function (e) {
      if (e.cancelable) {
         e.preventDefault();
      }
      info();
   });
   information.addEventListener('click', function (e) {
      e.preventDefault();
      info();
   });

   let vol = document.getElementById('volume');
   vol.addEventListener('touchstart', function (e) {
      if (e.cancelable) {
         e.preventDefault();
      }
      volume();
   });
   vol.addEventListener('click', function (e) {
      e.preventDefault();
      volume();
   });

   let startGame = document.getElementById('startGame');
   startGame.addEventListener('touchstart', function (e) {
      if (e.cancelable) {
         e.preventDefault();
      }
      gameStarted = true;
      start();
   });
   startGame.addEventListener('click', function (e) {
      e.preventDefault();
      gameStarted = true;
      start();
   });
   
   let backToMenu = document.getElementById('backToMenu');
   backToMenu.addEventListener('touchstart', function (e) {
      if (e.cancelable) {
         e.preventDefault();
      }
      gameStarted = false;
      menu();
   });
   backToMenu.addEventListener('click', function (e) {
      e.preventDefault();
      gameStarted = false;
      menu();
   });
});

function start() {
   let intro = document.getElementById('intro');
   intro.classList.add('d-none');
   let startGame = document.getElementById('startGame');
   startGame.classList.add('d-none');
   init();
}

function init() {
   initLevel();
   canvas = document.getElementById('canvas');
   world = new World(canvas, keyboard);
}

function toggleFullscreen() {
   if (!isFullscreen) {
      fullscreen();
   } else {
      exitFs();
   }
}

function volume() {
   if (!mute) {
      document.getElementById('volume').src = 'assets/png/mute.png';
      for (let i = 0; i < sounds.length; i++) {
         const sound = sounds[i];
         sound.muted = true;
      }
      mute = true;
   } else {
      document.getElementById('volume').src = 'assets/png/volume.png';
      for (let i = 0; i < sounds.length; i++) {
         const sound = sounds[i];
         sound.muted = false;
      }
      mute = false;
   }
}

function info() {
   document.getElementById('description').classList.toggle('d-none');
}

function fullscreen() {
   document.getElementById('game').requestFullscreen();
   scaleWindow('100vh', 'auto')
   isFullscreen = true;
}

function exitFs() {
   document.exitFullscreen();
   scaleWindow('480px', '720px');
   isFullscreen = false;
}

function scaleWindow(height, width) {
   document.getElementById('intro').style.height = `${height}`;
   document.getElementById('intro').style.width = `${width}`;
   document.getElementById('gameOver').style.height = `${height}`;
   document.getElementById('gameOver').style.width = `${width}`;
   document.getElementById('youLost').style.height = `${height}`;
   document.getElementById('youLost').style.width = `${width}`;
}

function menu() {
   location.reload();
}

window.addEventListener('keydown', (e) => {
   if (e.code == 'ArrowRight') {
      keyboard.RIGHT = true;
   }

   if (e.code == 'ArrowLeft') {
      keyboard.LEFT = true;
   }

   if (e.code == 'Space') {
      keyboard.SPACE = true;
   }

   if (e.code == 'KeyD') {
      keyboard.D = true;
   }

   if ((e.code == 'Enter' || e.code == 'NumpadEnter') && !gameStarted) {
      start();
      gameStarted = true;
   }

   if (e.code == 'ArrowDown') {
      if (!isFullscreen) {
         fullscreen();
      } else {
         exitFs();
      }
   }
});

window.addEventListener('keyup', (e) => {
   if (e.code == 'ArrowRight') {
      keyboard.RIGHT = false;
   }

   if (e.code == 'ArrowLeft') {
      keyboard.LEFT = false;
   }

   if (e.code == 'Space') {
      keyboard.SPACE = false;
   }

   if (e.code == 'KeyD') {
      keyboard.D = false;
   }
});