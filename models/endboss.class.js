class Endboss extends MovableObject {

    height = 400;
    width = 250;
    y = 60;
    yCollision = this.y;
    widthCollision = this.width;
    heightCollision = this.height;
    behindEndboss;
    enbossMoving;
    endbossAnimation;
    world;
    speed = 2.5;
    energy = 400;

    IMAGES_WALKING = [
        'assets/img/4_enemie_boss_chicken/1_walk/G1.png',
        'assets/img/4_enemie_boss_chicken/1_walk/G2.png',
        'assets/img/4_enemie_boss_chicken/1_walk/G3.png',
        'assets/img/4_enemie_boss_chicken/1_walk/G4.png'
    ];

    IMAGES_ALERT = [
        'assets/img/4_enemie_boss_chicken/2_alert/G5.png',
        'assets/img/4_enemie_boss_chicken/2_alert/G6.png',
        'assets/img/4_enemie_boss_chicken/2_alert/G7.png',
        'assets/img/4_enemie_boss_chicken/2_alert/G8.png',
        'assets/img/4_enemie_boss_chicken/2_alert/G9.png',
        'assets/img/4_enemie_boss_chicken/2_alert/G10.png',
        'assets/img/4_enemie_boss_chicken/2_alert/G11.png',
        'assets/img/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    IMAGES_ATTACK = [
        'assets/img/4_enemie_boss_chicken/3_attack/G13.png',
        'assets/img/4_enemie_boss_chicken/3_attack/G14.png',
        'assets/img/4_enemie_boss_chicken/3_attack/G15.png',
        'assets/img/4_enemie_boss_chicken/3_attack/G16.png',
        'assets/img/4_enemie_boss_chicken/3_attack/G17.png',
        'assets/img/4_enemie_boss_chicken/3_attack/G18.png',
        'assets/img/4_enemie_boss_chicken/3_attack/G19.png',
        'assets/img/4_enemie_boss_chicken/3_attack/G20.png'
    ];

    IMAGES_HURT = [
        'assets/img/4_enemie_boss_chicken/4_hurt/G21.png',
        'assets/img/4_enemie_boss_chicken/4_hurt/G22.png',
        'assets/img/4_enemie_boss_chicken/4_hurt/G23.png'
    ];

    IMAGES_DEAD = [
        'assets/img/4_enemie_boss_chicken/5_dead/G24.png',
        'assets/img/4_enemie_boss_chicken/5_dead/G25.png',
        'assets/img/4_enemie_boss_chicken/5_dead/G26.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_ALERT[0]);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.x = 2300;
        this.xCollision = this.x;

        this.animate();
        this.clearIntervals();
    }

    animate() {
        let i = 0

        this.enbossMoving = setInterval(() => {
            if (this.world.character.sawBoss && i > 14) {
                this.moveLeft();
            }
        }, 1000 / 60);

        this.endbossAnimation = setInterval(() => {
            if (!this.world.character.sawBoss) {
                this.playAnimation(this.IMAGES_ALERT);
            } else if (this.isDead()) {
                this.slideOutOfMap(this.enbossMoving);
                this.playAnimation(this.IMAGES_DEAD);
                this.enbossIsDead = true;
                setTimeout(() => {
                    document.getElementById('gameOver').classList.remove('d-none');
                    document.getElementById('backToMenu').classList.remove('d-none');
                }, 1000);
            } else if (this.isHurt()) {
                this.speed = 0;
                console.log(this.energy);
                this.playAnimation(this.IMAGES_HURT);
            } else {
                if (i < 15) {
                    this.playAnimation(this.IMAGES_ATTACK);
                    i++;
                } else {
                    this.speed = 2.5;
                    this.playAnimation(this.IMAGES_WALKING);
                }
            }
        }, 100);
    }
}