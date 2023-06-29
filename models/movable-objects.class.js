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
    }

    moveLeft() {
        this.xCollision = this.x;
        this.x -= this.speed;
        if (this instanceof Character) {
            this.xCollision = this.x + 20;
        } else {
            this.xCollision = this.x;
        }
    }

    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isDead() {
        return this.energy <= 0;
    }

    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < 1;
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
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