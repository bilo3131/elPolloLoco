class Endboss extends MovableObject {

    height = 400;
    width = 250;
    y = 60;
    yCollision = this.y;
    widthCollision = this.width;
    heightCollision = this.height;
    behindEndboss;
    endbossMoving;
    endbossAnimation;
    world;
    energy = 41;
    images = imagesEndboss;
    walking = this.images.walking;
    alert = this.images.alert;
    attack = this.images.attack;
    hurt = this.images.hurt;
    dead = this.images.dead;

    constructor() {
        super().loadImage(this.alert[0]);
        this.loadImages(this.alert);
        this.loadImages(this.walking);
        this.loadImages(this.attack);
        this.loadImages(this.dead);
        this.loadImages(this.hurt);
        this.x = 2300;
        this.xCollision = this.x;

        this.animate();
        this.clearIntervals();
    }

    animate() {
        let i = 0;
        let j = 0;
        this.endbossMoving = setInterval(() => {
            if (this.world.character.sawBoss && i > 14) {
                this.moveLeft();
                // console.log(i);
            }
        }, 1000 / 60);

        this.endbossAnimation = setInterval(() => {
            if (!this.world.character.sawBoss) {
                this.playAnimation(this.alert);
            } else if (this.isDead()) {
                sounds[chicken_damage_sound.pause()];
                this.slideOutOfMap(this.endbossMoving);
                this.playAnimation(this.dead);
                this.endbossIsDead = true;

                setTimeout(() => {
                    document.getElementById('gameOver').classList.remove('d-none');
                    document.getElementById('backToMenu').classList.remove('d-none');
                }, 1000);
            } else if (this.isHurt()) {
                j++;
                if (j < 11) {
                    sounds[chicken_damage_sound.play()];
                    this.energy--;
                    this.playAnimation(this.hurt);
                    this.speed = 0;
                    this.checkLife();
                }
            } else {
                if (i < 15) {
                    this.playAnimation(this.attack);
                    i++;
                } else {
                    this.speed = 3;
                    this.playAnimation(this.walking);
                    j = 0;
                }
            }
        }, 100);
    }

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