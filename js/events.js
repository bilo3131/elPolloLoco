/** EventListener for the gameplay and fullscreen on key down */
window.addEventListener('keydown', (e) => {
    if (e.code == 'ArrowRight')
        keyboard.RIGHT = true;
    if (e.code == 'ArrowLeft')
        keyboard.LEFT = true;
    if (e.code == 'Space')
        keyboard.SPACE = true;
    if (e.code == 'KeyD')
        keyboard.D = true;
    toggleFullscreenEvents(e);
});

/**
 * Detects the keybinding for the fullscreenmode
 * @param {keyof} e - Keycode to determine the keys
 */
function toggleFullscreenEvents(e) {
    if ((e.code == 'Enter' || e.code == 'NumpadEnter')) {
        if (!isFullscreen) {
            fullscreen();
        } else {
            quitFullscreen();
        }
    }
}

/** EventListener for the gameplay on key up */
window.addEventListener('keyup', (e) => {
    if (e.code == 'ArrowRight')
        keyboard.RIGHT = false;
    if (e.code == 'ArrowLeft')
        keyboard.LEFT = false;
    if (e.code == 'Space')
        keyboard.SPACE = false;
    if (e.code == 'KeyD')
        keyboard.D = false;
});

/** EventListener for touchscreen devices */
document.addEventListener('DOMContentLoaded', function () {
    eventsGameplay();
    eventsVolInfo();
    eventsStartBack();
});

/** Touch events for the gameplay */
function eventsGameplay() {
    let left = document.getElementById('left');
    let right = document.getElementById('right');
    let jump = document.getElementById('jump');
    let throwing = document.getElementById('throwing');
    touchEventLeft(left);
    eventRight(right);
    eventJump(jump);
    eventThrowing(throwing);
}

/** Touch events for the volume and the info section */
function eventsVolInfo() {
    let information = document.getElementById('info');
    eventInformation(information);
    eventVol();
}

/** Touch events to start the game and to go back to menu */
function eventsStartBack() {
    let startGame = document.getElementById('startGame');
    let backToMenu = document.getElementById('backToMenu');
    eventStartGame(startGame);
    eventBackToMenu(backToMenu);
}

/**
 * EventListener for moving left
 * @param {HTMLElement} left - Touch button for moving left
 */
function touchEventLeft(left) {
    left.addEventListener('touchstart', function (e) {
       if (e.cancelable) {
          e.preventDefault();
          keyboard.LEFT = true;
       }
    });
    left.addEventListener('touchend', function (e) {
       if (e.cancelable) {
          e.preventDefault();
          keyboard.LEFT = false;
       }
    });
 }

 /**
 * EventListener for moving right
 * @param {HTMLElement} right - Touch button for moving right
 */
 function eventRight(right) {
    right.addEventListener('touchstart', function (e) {
       if (e.cancelable) {
          e.preventDefault();
          keyboard.RIGHT = true;
       }
    });
    right.addEventListener('touchend', function (e) {
       if (e.cancelable) {
          e.preventDefault();
          keyboard.RIGHT = false;
       }
    });
 }

 /**
 * EventListener for jumping
 * @param {HTMLElement} jump - Touch button for jumping
 */
 function eventJump(jump) {
    jump.addEventListener('touchstart', function (e) {
       if (e.cancelable) {
          e.preventDefault();
          keyboard.SPACE = true;
       }
    });
    jump.addEventListener('touchend', function (e) {
       if (e.cancelable) {
          e.preventDefault();
          keyboard.SPACE = false;
       }
    });
 }

 /**
 * EventListener for throwing
 * @param {HTMLElement} throwing - Touch button for throwing
 */
 function eventThrowing(throwing) {
    throwing.addEventListener('touchstart', function (e) {
       if (e.cancelable) {
          e.preventDefault();
          keyboard.D = true;
       }
    });
    throwing.addEventListener('touchend', function (e) {
       if (e.cancelable) {
          e.preventDefault();
          keyboard.D = false;
       }
    });
 }

 /**
  * EventListener for touch or click the information button
  * @param {HTMLElement} information - Button for show the keybinding
  */
 function eventInformation(information) {
    information.addEventListener('touchstart', function (e) {
       if (e.cancelable) {
          e.preventDefault();
          info();
       }
    });
    information.addEventListener('click', function (e) {
       e.preventDefault();
       info();
    });
 }

 /** EventListener for touch or click the volume button */
 function eventVol() {
    vol = document.getElementById('volume');
    vol.addEventListener('touchstart', function (e) {
       if (e.cancelable) e.preventDefault();
       setSound();
       volume();
    });
    vol.addEventListener('click', function (e) {
       e.preventDefault();
       setSound();
       volume();
    });
 }

 /** Mute or unmute sounds */
 function setSound() {
    if (soundIsMuted) {
        soundIsMuted = false;
     } else {
        soundIsMuted = true;
     }
 }

 /**
  * EventListener for touch or click to start the game
  * @param {HTMLElement} startGame - Button for start the game
  */
 function eventStartGame(startGame) {
    startGame.addEventListener('touchstart', function (e) {
       if (e.cancelable) {
          e.preventDefault();
          start();
       }
    });
    startGame.addEventListener('click', function (e) {
       e.preventDefault();
       start();
    });
 }

 /**
  * EventListener for touch or click to go back to menu
  * @param {HTMLElement} backToMenu - Button for go back to menu
  */
 function eventBackToMenu(backToMenu) {
    backToMenu.addEventListener('touchstart', function (e) {
       if (e.cancelable) {
          e.preventDefault();
          start();
       }
    });
    backToMenu.addEventListener('click', function (e) {
       e.preventDefault();
       start();
    });
 }