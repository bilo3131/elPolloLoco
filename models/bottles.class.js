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

        this.x = 300 + Math.random() * 1700;
        // this.animate();
    }

    animate() {
        for (let i = 0; i < this.IMAGES_OBJECTS.length; i++) {
            const currentImage = this.IMAGES_OBJECTS[i];
            this.playAnimation(currentImage, i);
        }
    }
}