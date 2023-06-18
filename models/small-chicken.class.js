class SmallChicken extends Chicken {
    y = 380;
    height = 45;
    width = 45;
    IMAGES_WALKING = [
        'assets/img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'assets/img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'assets/img/3_enemies_chicken/chicken_small/1_walk/3_w.png',
    ];

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
    }
}