class Endboss extends MovableObject {

    /** Height of the endboss */
    height = 400;
    /** Width of the endboss */
    width = 250;
    /** Y-Axis of the endboss */
    y = 60;
    /** Is needed for the collision with the character */
    yCollision = this.y;
    /** Is needed for the collision with the character */
    widthCollision = this.width;
    /** Is needed for the collision with the character */
    heightCollision = this.height;
    behindEndboss;
    /** Interval for the moving of the endboss */
    endbossMoving;
    /** Interval for the animation of the endboss */
    endbossAnimation;
    /** Instance of the world where the objects are shown and animated */
    world;
    /** Life of the Endboss */
    energy = 41;
    /** All images of the endboss */
    images = imagesEndboss;
    /** Counter for the attack then the walk scene */
    i = 0;
    /** Counter for the damage */
    j = 0;

    /**
     * @param {Function} loadImage - Load one image
     * @param {Function} loadImages - Load all images of the movement
     */
    constructor() {
        super().loadImage(this.images.alert[0]);
        this.loadImages(this.images.alert);
        this.loadImages(this.images.walking);
        this.loadImages(this.images.attack);
        this.loadImages(this.images.dead);
        this.loadImages(this.images.hurt);
        this.x = 2300;
        this.xCollision = this.x;

        this.animate();
        this.checkWinner();
    }

    /** Animate the endboss and let it walk left */
    animate() {
        this.endbossMoving = setInterval(() => {
            this.endbossMovingStart();
        }, 1000 / 60);
        this.endbossAnimation = setInterval(() => {
            this.animations();
        }, 100);
    }

    /** Animate the situation of the endboss */
    animations() {
        if (!this.world.character.sawBoss) {
            this.playAnimation(this.images.alert);
        } else if (this.isDead()) {
            this.animateDead(this.endbossMoving, this.images.dead);
            this.gameOver();
        } else if (this.isHurt()) {
            this.j++;
            this.hurtEndboss();
        } else {
            this.animateAttackWalk();
        }
    }

    /** Let the endboss moving left */
    endbossMovingStart() {
        if (this.world.character.sawBoss && this.i > 14) {
            this.moveLeft();
        }
    }

    /** Animate the hurt scene and substract health */
    hurtEndboss() {
        if (this.j <= 10) {
            sounds[chicken_damage_sound.play()];
            this.energy--;
            this.playAnimation(this.images.hurt);
            this.speed = 0;
            this.checkLife();
        }
    }

    /**
     * Let the endboss animate first the attack
     * then the walk scenes
     */
    animateAttackWalk() {
        this.j;
        if (this.i < 15) {
            this.playAnimation(this.images.attack);
            this.i++;
        } else {
            this.speed = 3;
            this.playAnimation(this.images.walking);
            this.j = 0;
        }
    }

    /** Control the life of the endboss and set the health */
    checkLife() {
        if (this.energy == 41) {
            document.getElementById('life').innerHTML = '5';
        } else if (this.energy > 30) {
            document.getElementById('life').innerHTML = '4';
        } else if (this.energy > 20) {
            document.getElementById('life').innerHTML = '3';
        } else if (this.energy > 10) {
            document.getElementById('life').innerHTML = '2';
        } else if (this.energy > 0) {
            document.getElementById('life').innerHTML = '1';
        } else {
            document.getElementById('life').innerHTML = '0';
        }
    }
}