class Coins extends CollactableObjects {
    y;
    height = 80;
    width = 80;
    IMAGES_OBJECTS = [
        'assets/img/8_coin/coin_1.png',
        'assets/img/8_coin/coin_2.png',
    ];

    constructor() {
        super().loadImage(this.IMAGES_OBJECTS[0]);
        this.loadImages(this.IMAGES_OBJECTS);

        // this.test(this.IMAGES_OBJECTS);
        this.x = 300 + Math.random() * 1700;
        this.y = 90 + Math.random() * 270;
    }
}