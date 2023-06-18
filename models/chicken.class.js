class Chicken extends MovableObject {
    y;
    height;
    width;
    IMAGES_WALKING;

    constructor() {
        super();

        this.x = 400 + Math.random() * 2100;
        this.speed = 0.15 + Math.random() * 0.25;

        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 200);
    }
}