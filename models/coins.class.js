class Coins extends CollactableObjects {
    y;
    height = 80;
    width = 80;
    IMAGES_OBJECTS = 'assets/img/8_coin/coin_1.png';

    constructor() {
        super().loadImage(this.IMAGES_OBJECTS);
        this.y = 90 + Math.random() * 270;
    }
}