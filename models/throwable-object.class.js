class ThrowableObject extends MovableObject {
    IMAGES_THROWING = [
        'assets/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'assets/img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'assets/img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'assets/img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ];
    IMAGES_SPLASHING = [
        'assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
    ];
    img;
    height = 70;
    width = 70;
    heightCollision = this.height - 30;
    widthCollision = this.width - 30;
    speedX = 10;
    speedY = 20;
    lookRight = true;
    direction;

    constructor(x, y) {
        super().loadImage(this.IMAGES_THROWING[0]);
        this.loadImages(this.IMAGES_THROWING);
        this.loadImages(this.IMAGES_SPLASHING);
        this.x = x;
        this.y = y;
        this.xCollision = this.x + 15;
        this.yCollision = this.y + 15;
        this.throw();
    }

    throw() {
        this.applyGravity();
        this.speedY = 20;
        if (world.character.otherDirection) {
            this.lookRight = false;
        }

        this.direction = setInterval(() => {
            if (this.isAboveGround() && !this.hurtEndboss()) {
                if (this.lookRight) {
                    this.x += this.speedX;
                    this.xCollision += this.speedX;
                } else {
                    this.x -= this.speedX;
                    this.xCollision -= this.speedX;
                }
            } else {
                this.speedY = 0
            }
        }, 25);

        let i = 0;
        let j = 0;
        setInterval(() => {
            if (this.hurtEndboss() || !this.isAboveGround()) {
                world.objectIsThrowable = true;
                this.xCollision = -800;
                if (i < 6) {
                    j++;
                    if (j == 1) {
                        sounds[bottle_splash.play()];
                    }
                    this.playAnimation(this.IMAGES_SPLASHING);
                    this.speedY = 0;
                    this.speedX = 0
                    i++;
                } else {
                    this.x = -800;
                    i = 0;
                }
            } else if (this.isAboveGround()) {
                if (!this.hurtEndboss()) {
                    world.objectIsThrowable = false;
                    this.playAnimation(this.IMAGES_THROWING);
                }
            } 
        }, 100);
    }

    hurtEndboss() {
        return world.endboss.isHurt();
    }
}

