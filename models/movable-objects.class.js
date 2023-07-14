class MovableObject extends DrawableObject {
    /** For checking if the character turns around */
    otherDirection = false;
    /** Speed of the y-axis */
    speedY = 0;
    /** acceleration by a falling object */
    acceleration = 2.5;
    /** Energy of the character or the endboss */
    energy;
    /** To check when the last hit happened */
    lastHit = 0;
    /** Is needed for the collisions */
    xCollision;
    /** Is needed for the collisions */
    yCollision;
    /** Is needed for the collisions */
    widthCollision;
    /** Is needed for the collisions */
    heightCollision;
    /** Control the present x-axis of the character */
    characterPositionX;
    /** Control if the endboss is seen by the character */
    sawBoss = false;
    /** Control if the character is dead */
    characterIsDead = false;
    /** Control if the endboss is dead */
    endbossIsDead = false;
    /** Interval which pops up if the character dies */
    showGameOver;
    /** Counter for the sound to play after win or lose */
    k = 0;

    /** Set the gravity by jumping or throwing bottles */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.yCollision -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    /** Let the character move right */
    moveRight() {
        this.x += this.speed;
        this.xCollision = this.x + 20;
        this.characterPositionX = this.xCollision;
        this.checkFirstContact();
    }

    /** Let the respective object move left */
    moveLeft() {
        this.x -= this.speed;
        this.xCollision = this.x;
        if (this instanceof Character) {
            this.xCollision = this.x + 20;
            this.characterPositionX = this.xCollision;
        } else if (this instanceof Endboss) {
            this.behindEndboss = this.xCollision + this.width;
        }
    }

    /**
     * To slide the character or the endboss by kill out of map
     * @param {Function} intervalToEnd - The interval which should be cleared
     */
    slideOutOfMap(intervalToEnd) {
        clearInterval(intervalToEnd);
        setInterval(() => {
            this.y++;
        }, 1000 / 60);
    }

    /** 
     * Check the first contact between character and endboss
     * by compare the pixels of 'firstContact' and the present
     * x-axis of the character
     */
    checkFirstContact() {
        if (this.x >= this.firstContact) {
            this.sawBoss = true;
            document.getElementById('endbossHealth').classList.remove('d-none');
        }
    }

    /** Check the winner */
    checkWinner() {
        setInterval(() => {
            if (this.endbossIsDead) {
                this.youWin();
            } else if (this.characterIsDead) {
                this.youLose();
            }
        }, 10);
    }

    /** Play sound by winning and clear the interval of the character and the endboss */
    youWin() {
        this.k++;
        if (this.k == 100) {
            sounds[win_sound.play()];
            this.clearEndbossInterval();
            this.clearCharacterInterval();
        }
    }

    /** Play sound by losing and clear the interval of the character and the endboss */
    youLose() {
        this.k++;
        if (this.k == 100) {
            sounds[lose_sound.play()];
            this.clearEndbossInterval();
            this.clearCharacterInterval();
        }
    }

    /** Clear the intervals from the character */
    clearCharacterInterval() {
        clearInterval(this.world.character.characterMoving);
        clearInterval(this.world.character.characterAnimation);
        sounds[walking_sound.pause()];
        this.world.character.yCollision = -800;
    }

    /** Clear the intervals from the endboss */
    clearEndbossInterval() {
        clearInterval(this.world.endboss.endbossAnimation);
        clearInterval(this.world.endboss.endbossMoving);
    }

    /** 
     * By hitting substract health and save the time
     * when the hit is happened
     */
    hit() {
        if (this instanceof Character) {
            this.energy -= 5;
        }
        if (this.energy > 0) {
            this.lastHit = new Date().getTime();
        } else {
            this.energy = 0;
        }
    }

    /**
     * Check if the endboss or the character is dead
     * @returns Is dead if the energy is 0 or lower
     */
    isDead() {
        return this.energy <= 0;
    }

    /** Show the Game Over screen */
    gameOver() {
        if (this instanceof Endboss) {
            this.endbossIsDead = true;
        } else {
            this.characterIsDead = true;
        }
        this.showGameOver = setTimeout(() => {
            document.getElementById('gameOver').classList.remove('d-none');
            document.getElementById('backToMenu').classList.remove('d-none');
        }, 1000);
    }

    /** Animation for the dead act and let the dead object slide down */
    animateDead(interval, img) {
        if (this instanceof Endboss) {
            sounds[chicken_damage_sound.pause()];
        }
        this.slideOutOfMap(interval);
        this.playAnimation(img);
    }

    /**
     * Check if the endboss or the character were hitted
     * @returns One second damage
     */
    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < 1;
    }

    /**
     * Can be a throwable object or the character.
     * To check if the object is in the air.
     * @returns Object is above ground
     */
    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return this.y < 347 && this.x < world.endboss.x;
        } else {
            return this.y < 180;
        }
    }

    /**
     * Let the character jump
     * @returns The speed of the y-axis
     */
    jump() {
        return this.speedY = 30;
    }

    /**
     * Check if the character jumps of the enemy
     * @param {Object} mo - Enemy
     * @returns if false if the character didn't jump of the enemy
     */
    isJumpOf(mo) {
        return this.xCollision + this.widthCollision > mo.xCollision &&
            this.yCollision + this.heightCollision < 382.5 &&
            this.yCollision + this.heightCollision > 352.5 &&
            this.xCollision < mo.xCollision + mo.widthCollision;
    }
}