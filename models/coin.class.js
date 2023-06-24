class Coin extends CollactableObjects {
    y = 90 + Math.random() * 270;
    height = 80;
    width = 80;
    xCollision = this.x + 30;
    yCollision = this.y + 30;
    widthCollision = this.width - 60;
    heightCollision = this.height - 60;
    IMAGES_OBJECTS = [
        'assets/img/8_coin/coin_1.png',
        'assets/img/8_coin/coin_2.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_OBJECTS[0]);
        this.loadImages(this.IMAGES_OBJECTS);

        this.animate();
    }
}