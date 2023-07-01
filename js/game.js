let canvas;
let world;
let keyboard = new Keyboard();
let isFullscreen = false;
let gameStarted = false;

function init() {
   initLevel();
   canvas = document.getElementById('canvas');
   world = new World(canvas, keyboard);
}

function start() {
   let intro = document.getElementById('intro');
   intro.classList.add('d-none');
   let startButton = document.getElementById('startButton');
   startButton.classList.add('d-none');
   init();
}

function toggleFullscreen() {
   if (!isFullscreen) {
      fullscreen();
   } else {
      exitFs();
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
}

window.addEventListener('keydown', (e) => {
   console.log(e);
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
   
   if (e.code == 'Enter' && !gameStarted) {
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