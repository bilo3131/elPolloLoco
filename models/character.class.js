class Character extends MovableObject {

    x = 0;
    y = 180;
    height = 250;
    width = 150;
    xCollision = this.x + 20;
    yCollision = this.y + 100;
    widthCollision = this.width - 60;
    heightCollision = this.height - 100;
    firstContact = 1825;
    characterMoving;
    characterAnimation;
    images = imagesCharacter;
    waitingIMG = this.images.waiting;
    waitingLongIMG = this.images.waitingLong;
    walkingIMG = this.images.walking;
    jumpingIMG = this.images.jumping;
    hurtIMG = this.images.hurt;
    deadIMG = this.images.dead;
    world;
    speed = 5;

    constructor() {
        super().loadImage(this.waitingIMG[0]);
        this.loadImages(this.walkingIMG);
        this.loadImages(this.waitingIMG);
        this.loadImages(this.waitingLongIMG);
        this.loadImages(this.jumpingIMG);
        this.loadImages(this.hurtIMG);
        this.loadImages(this.deadIMG);

        this.applyGravity();

        this.animate();
        this.clearIntervals();
    }

    animate() {
        this.characterMoving = setInterval(() => {
            if (this.isPressedRight() && this.isLowerThanWorldRange()) {
                this.moveRight();
                this.otherDirection = false;
            }

            if (this.isPressedLeft() && this.isMoreThanStartPoint()) {
                this.moveLeft()
                this.otherDirection = true;
            }

            if (this.isPressedSpace() && !this.isAboveGround()) {
                sounds[jump_sound.play()];
                this.jump();
            }

            if (this.x > this.world.endboss.behindEndboss) {
                this.energy = 0;
                this.world.statusbarHealth.setPercentage(this.energy);
            }

            this.world.camera_x = -this.x + 60;
        }, 1000 / 60);
        let i = 0;
        this.characterAnimation = setInterval(() => {
            sounds[walking_sound.pause()];
            if (this.isDead()) {
                this.playAnimation(this.deadIMG);
                this.slideOutOfMap(this.characterMoving);
                this.characterIsDead = true;
                setTimeout(() => {
                    document.getElementById('youLost').classList.remove('d-none');
                    document.getElementById('backToMenu').classList.remove('d-none');
                }, 1000);
            } else if (this.isHurt()) {
                sounds[damage_sound.play()];
                this.playAnimation(this.hurtIMG);
            } else if (this.isAboveGround()) {
                this.playAnimation(this.jumpingIMG);
                i = 0;
            } else if (!this.isPressedRight() && !this.isPressedLeft() && !this.isAboveGround()) {
                if (this.isPressedD()) {
                    i = 0;
                } else if (i < 50) {
                    this.playAnimation(this.waitingIMG);
                } else {
                    this.playAnimation(this.waitingLongIMG);
                }
                i++;
            } else if ((this.isPressedRight() || this.isPressedLeft())) {
                sounds[walking_sound.play()];
                this.playAnimation(this.walkingIMG);
                i = 0;
            }
        }, 80);
    }

    isPressedRight() {
        return this.world.keyboard.RIGHT;
    }

    isPressedLeft() {
        return this.world.keyboard.LEFT;
    }

    isPressedSpace() {
        return this.world.keyboard.SPACE;
    }

    isPressedD() {
        return this.world.keyboard.D;
    }

    isMoreThanStartPoint() {
        return this.x > 0;
    }

    isLowerThanWorldRange() {
        return this.x < this.world.level.level_end_x;
    }
}