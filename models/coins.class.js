class Coins extends CollactableObjects {
    y = 90 + Math.random() * 270;
    height = 80;
    width = 80;
    xCollision = this.x + 30;
    yCollision = this.y + 30;
    heightCollision = this.height - 60;
    widthCollision = this.width - 60;
    IMAGES_OBJECTS = [
        'assets/img/8_coin/coin_1.png',
        'assets/img/8_coin/coin_2.png'
    ];

    constructor(i) {
        super().loadImage(this.IMAGES_OBJECTS[i]);
        if (i == 1) {
            this.bigCoin();
        }
    }

    bigCoin() {
        this.height = 100;
        this.width = 100;
        this.xCollision = this.x + 35;
        this.yCollision = this.y + 35;
        this.heightCollision = this.height - 70;
        this.widthCollision = this.width - 70;
    }
}