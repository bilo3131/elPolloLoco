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

    splashBottle() {
        this.speedY = 0;
        setInterval(() => {
            this.playAnimation(this.IMAGES_SPLASHING);
        }, 100);
    }

    throw() {
        this.applyGravity();
        this.speedY = 20;

        setInterval(() => {
            if (this.isOnAir()) {
                this.x += 10;
                this.xCollision += 10;
            } else {
                this.speedY = 0
            }
        }, 25);

        let i = 0;
        setInterval(() => {
            if (this.isOnAir()) {
                if (!(this.xCollision >= world.endboss.xCollision)) {
                    this.playAnimation(this.IMAGES_THROWING);
                    i = 0;
                }
            } else if (i == 0) {
                this.playAnimation(this.IMAGES_SPLASHING);
                i++;
            } else {
                this.x = -800;
                this.xCollision = -800;
                this.speedY = 0;
            }
        }, 100);
    }

    isOnAir() {
        return this.y < 347;
    }
}

