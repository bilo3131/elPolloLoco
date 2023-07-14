class Coin extends CollectableObjects {
    /** Y-Axis of the coin */
    y = 90 + Math.random() * 200;
    /** Height of the coins */
    height = 100;
    /** Width of the coins */
    width = 100;
    /** Is needed for the collision with the character */
    xCollision = this.x + 30;
    /** Is needed for the collision with the character */
    yCollision = this.y + 30;
    /** Is needed for the collision with the character */
    widthCollision = this.width - 60;
    /** Is needed for the collision with the character */
    heightCollision = this.height - 60;
    /** Images of the coins */
    IMAGES_OBJECTS = [
        'assets/img/8_coin/coin_1.png',
        'assets/img/8_coin/coin_2.png'
    ];

    /** Set a coin object */
    constructor() {
        super().loadImage(this.IMAGES_OBJECTS[0]);
        this.loadImages(this.IMAGES_OBJECTS);
        this.animate();
    }
}