class ThrowableObject extends MovableObject {
    /** Images of the throwing bottle */
    IMAGES_THROWING = [
        'assets/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'assets/img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'assets/img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'assets/img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ];
    /** Images of the splashing bottle */
    IMAGES_SPLASHING = [
        'assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
    ];
    /** Height of the throwable bottle */
    height = 70;
    /** Width of the throwable bottle */
    width = 70;
    /** Collision measure for the height of the bottle */
    heightCollision = this.height - 30;
    /** Collision measure for the width of the bottle */
    widthCollision = this.width - 30;
    /** Speed of throwing on the X-Axis */
    speedX = 10;
    /** Speed of throwing on the Y-Axis */
    speedY = 20;
    /** Determine the direction where the bottle throw at */
    lookRight = true;
    /** Counter for the animation of the splashed bottle */
    n = 0;
    /** Interval to set the direction, where the bottle should be throw at */
    bottleDirection;
    /** Interval to set the animation of the thrown bottle */
    animationBottle;

    /**
     * Set the bottle which is thrown and its measures
     * @param {Number} x - X-Axis where the throwable object starts at
     * @param {Number} y - Y-Axis where the throwable object starts at
     */
    constructor(x, y) {
        super().loadImage(this.IMAGES_THROWING[0]);
        this.loadImages(this.IMAGES_THROWING);
        this.loadImages(this.IMAGES_SPLASHING);
        this.x = x;
        this.y = y;
        this.xCollision = this.x + 15;
        this.yCollision = this.y + 15;
        this.throw();
        this.applyGravity();
    }

    /** 
     * Check the direction of the throwing bottle
     * and set the animations of the throwing and 
     * splashing moments
     */
    throw() {
        if (world.character.otherDirection) {
            this.lookRight = false;
        }
        this.bottleDirection = setInterval(() => {
            this.setDirectionOfThrowing();
        }, 25);
        this.animationBottle = setInterval(() => {
            this.animateThrowing();
        }, 100);
    }

    /** Animations of the throwed bottle by colliding  */
    animateThrowing() {
        if (!this.isAboveGround() || this.hurtEndboss()) {
            this.bottleColliding();
        } else {
            this.playAnimation(this.IMAGES_THROWING);
        }
    }

    /** Let the bottle splash first then vanish it */
    bottleColliding() {
        if (this.n < 4) {
            this.splashBottle();
            this.n++;
        } else {
            this.vanishBottle();
        }
    }

    /** Let the bottle splash and play the sound for the splashing bottle */
    splashBottle() {
        this.speedX = 0;
        sounds[bottle_splash.play()];
        this.playAnimation(this.IMAGES_SPLASHING);
        this.xCollision = -800;
    }

    /** Let the splashed bottle vanish */
    vanishBottle() {
        this.x = -800;
        clearInterval(this.animationBottle);
        clearInterval(this.bottleDirection);
    }

    /** Check if the bottle is throwing right or left */
    setDirectionOfThrowing() {
        if (this.lookRight) {
            this.throwRight();
        } else {
            this.throwLeft();
        }
    }

    /** Throw the bottle right */
    throwRight() {
        this.x += this.speedX;
        this.xCollision += this.speedX;
    }

    /** Throw the bottle left */
    throwLeft() {
        this.x -= this.speedX;
        this.xCollision -= this.speedX;
    }

    /**
     * @returns the endboss is getting damage or not
     */
    hurtEndboss() {
        return world.endboss.x < this.x;
    }
}

