class NormalChicken extends Chicken {
    y = 350;
    height = 80;
    width = 80;
    xCollision;
    yCollision = this.y;
    widthCollision = this.width;
    heightCollision = this.height;
    IMAGES_WALKING = [
        'assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'assets/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'assets/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];
    IMAGE_DEAD = 'assets/img/3_enemies_chicken/chicken_normal/2_dead/dead.png';

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
    }
}