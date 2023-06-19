class Coins extends CollactableObjects {
    y;
    height = 80;
    width = 80;
    IMAGES_OBJECTS = [
        'assets/img/8_coin/coin_1.png',
        'assets/img/8_coin/coin_2.png'
    ];

    constructor(i) {
        super().loadImage(this.IMAGES_OBJECTS[i]);
        if (i == 1) {
            this.height = 100;
            this.width = 100;
        }
        this.y = 90 + Math.random() * 270;
    }
}