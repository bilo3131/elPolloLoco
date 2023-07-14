class Character extends MovableObject {
    /** X-Axis */
    x = 0;
    /** Y-Axis */
    y = 180;
    /** Height of the character */
    height = 250;
    /** Width of the character */
    width = 150;
    /** Life of the Character */
    energy = 100;
    /** Is needed for the collision with the enemies */
    xCollision = this.x + 20;
    /** Is needed for the collision with the enemies */
    yCollision = this.y + 100;
    /** Is needed for the collision with the enemies */
    widthCollision = this.width - 60;
    /** Is needed for the collision with the enemies */
    heightCollision = this.height - 100;
    /** If the x-axis of the character is more than this, the endboss will be attack */
    firstContact = 1825;
    /** The interval for the movement of the character */
    characterMoving;
    /** The interval for the animation of the character  */
    characterAnimation;
    /** All images of the character  */
    images = imagesCharacter;
    /** Instance of the world where the objects are shown and animated */
    world;
    /** Speed of the character */
    speed = 5;
    /** Counter for little and long waiting */
    i = 0;

    /** Set the character which can do various acts */
    constructor() {
        super().loadImage(this.images.waiting[0]);
        this.loadImages(this.images.walking);
        this.loadImages(this.images.waiting);
        this.loadImages(this.images.waitingLong);
        this.loadImages(this.images.jumping);
        this.loadImages(this.images.hurt);
        this.loadImages(this.images.dead);
        this.applyGravity();
        this.animate();
        this.checkWinner();
    }

    /** Character's moving and the animations  */
    animate() {
        this.characterMoving = setInterval(() => {
            this.action();
            this.deadByPassEndboss()
            this.world.camera_x = -this.x + 60;
        }, 1000 / 60);
        this.characterAnimation = setInterval(() => {
            sounds[walking_sound.pause()];
            this.animations();
        }, 80);
    }

    /** Animate the situation of the character */
    animations() {
        if (this.isDead()) {
            this.animateDead(this.characterMoving, this.images.dead);
            this.gameOver();
        } else if (this.isHurt()) {
            sounds[damage_sound.play()];
            this.playAnimation(this.images.hurt);
        } else if (this.isAboveGround()) {
            this.playAnimation(this.images.jumping);
            this.i = 0;
        } else if (!this.isPressedRight() && !this.isPressedLeft() && !this.isAboveGround()) {
            this.animateWaiting();
        } else if ((this.isPressedRight() || this.isPressedLeft())) {
            sounds[walking_sound.play()];
            this.playAnimation(this.images.walking);
            this.i = 0;
        }
    }

    /**
     * @returns The arrow right button is pressed
     */
    isPressedRight() {
        return this.world.keyboard.RIGHT;
    }

    /**
     * @returns The arrow left button is pressed
     */
    isPressedLeft() {
        return this.world.keyboard.LEFT;
    }

    /**
     * @returns The space button is pressed
     */
    isPressedSpace() {
        return this.world.keyboard.SPACE;
    }

    /**
     * @returns The D button is pressed
     */
    isPressedD() {
        return this.world.keyboard.D;
    }

    /**
     * @returns Character's maximum range to walk left
     */
    isMoreThanStartPoint() {
        return this.x > 0;
    }

    /**
     * @returns Character's maximum range to wlak right
     */
    isLowerThanWorldRange() {
        return this.x < this.world.level.level_end_x;
    }

    /** Animation for the wait act */
    animateWaiting() {
        if (this.isPressedD()) {
            this.i = 0;
        } else if (this.i < 50) {
            this.playAnimation(this.images.waiting);
        } else {
            this.playAnimation(this.images.waitingLong);
        }
        this.i++;
    }

    /** Character dies if it passes the endboss */
    deadByPassEndboss() {
        if (this.x > this.world.endboss.behindEndboss) {
            this.energy = 0;
            this.world.statusbarHealth.setPercentage(this.energy);
        }
    }

    /** Characters movement */
    action() {
        if (this.isPressedRight() && this.isLowerThanWorldRange()) {
            this.moveRight();
            this.otherDirection = false;
        } else if (this.isPressedLeft() && this.isMoreThanStartPoint()) {
            this.moveLeft()
            this.otherDirection = true;
        }
        if (this.isPressedSpace() && !this.isAboveGround()) {
            sounds[jump_sound.play()];
            this.jump();
        }
    }
}