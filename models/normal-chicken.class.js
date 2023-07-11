class NormalChicken extends Chicken {
    /** Y-Axis of the chicken */
    y = 350;
    /** Height of the chicken */
    height = 80;
    /** Width of the chicken */
    width = 80;
    /** Is needed for the collision with the character */
    xCollision;
    /** Is needed for the collision with the character */
    yCollision = this.y + 25;
    /** Is needed for the collision with the character */
    widthCollision = this.width;
    /** Is needed for the collision with the character */
    heightCollision = this.height;
    /** Walking images of the normal chicken */
    IMAGES_WALKING = [
        'assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'assets/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'assets/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];
    /** Image of the normal chicken by dead */
    IMAGE_DEAD = 'assets/img/3_enemies_chicken/chicken_normal/2_dead/dead.png';

    /**
     * @param {Function} loadImage - Load one image
     * @param {Function} loadImages - Load all images of the walking animation
     */
    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
    }
}