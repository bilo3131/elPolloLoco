class MovableObject extends DrawableObject {
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0 && this.y == 180) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            } 
            else if (!this.isDead()) {
                this.y = 180;   
            }
        }, 1000 / 25);
    }

    moveRight() {
        this.x += this.speed;
        this.xCollision = this.x;
    }

    moveLeft() {
        this.x -= this.speed;
        this.xCollision = this.x;
    }

    hit() {
        this.energy -= 20;
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
        return this.y < 180;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    jump() {
        return this.speedY = 30;
    }

    isJumpOf(mo) {
        return this.x + this.width - 30 > mo.xCollision &&
            this.y + this.height < 382.5 &&
            this.y + this.height > 352.5 &&
            this.x + 30 < mo.xCollision + mo.widthCollision;
    }
}