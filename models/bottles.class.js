class Bottle extends CollactableObjects {
    y = 370;
    height = 50;
    width = 80;
    IMAGES_OBJECTS = [
        'assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        'assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_OBJECTS[0]);
        this.loadImages(this.IMAGES_OBJECTS);
        // this.animate();
    }
}