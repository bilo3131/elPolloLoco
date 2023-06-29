class Chicken extends MovableObject {
    y;
    height;
    width;
    IMAGES_WALKING;
    chickenWalkingAnimation;
    chickenMoving;
    
    constructor() {
        super();

        this.x = 400 + Math.random() * 2100;
        this.speed = 0.15 + Math.random() * 0.25;

        this.animate();
    }

    animate() {
        this.chickenMoving = setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

        this.chickenWalkingAnimation = setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 200);
    }

    killed(img) {
        clearInterval(this.chickenMoving);
        clearInterval(this.chickenWalkingAnimation);
        this.loadImage(img);
        this.xCollision = -200;

        setInterval(() => {
            this.y ++;
        }, 1000 / 60);
    }
}