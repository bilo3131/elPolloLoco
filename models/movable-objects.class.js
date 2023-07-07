class MovableObject extends DrawableObject {
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;
    xCollision;
    yCollision;
    widthCollision;
    heightCollision;
    characterPositionX;
    sawBoss = false;
    characterIsDead = false;
    endbossIsDead = false;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || (this.speedY > 0)) {
                this.y -= this.speedY;
                this.yCollision -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    moveRight() {
        this.x += this.speed;
        this.xCollision = this.x + 20;
        this.characterPositionX = this.xCollision;
        this.checkFirstContact();
    }

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

    slideOutOfMap(intervalToEnd) {
        clearInterval(intervalToEnd);
        setInterval(() => {
            this.y++;
        }, 1000 / 60);
    }

    checkFirstContact() {
        if (this.x >= this.firstContact) {
            this.sawBoss = true;
            document.getElementById('endbossHealth').classList.remove('d-none');
        }
    }

    clearIntervals() {
        let i = 0;
        setInterval(() => {
            if (this.endbossIsDead) {
                i++;
                clearInterval(world.character.characterMoving);
                clearInterval(world.character.characterAnimation);
                sounds[walking_sound.pause()];
                world.character.yCollision = -800;
                if (i == 100) {
                    sounds[win_sound.play()];
                }
            } else if (this.characterIsDead) {
                i++;
                if (i == 100) {
                    sounds[lose_sound.play()];
                }
                clearInterval(world.endboss.endbossAnimation);
                clearInterval(world.endboss.enbossMoving);
            }
        }, 10);
    }

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

    isDead() {
        return this.energy <= 0;
    }

    // hittedEndboss() {

    // }

    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < 1;
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return this.y < 347;
        } else {
            return this.y < 180;
        }
    }

    jump() {
        return this.speedY = 30;
    }

    isJumpOf(mo) {
        return this.xCollision + this.widthCollision > mo.xCollision &&
            this.yCollision + this.heightCollision < 382.5 &&
            this.yCollision + this.heightCollision > 352.5 &&
            this.xCollision < mo.xCollision + mo.widthCollision;
    }
}