class Chicken extends MovableObject {
    /** Y-Axis of the chicken */
    y;
    /** Height of the chicks and the chickens */
    height;
    /** Width of the chicks and the chickens */
    width;
    /** The walking images of the chicken */
    IMAGES_WALKING;
    /** Interval for the walk animation of the chickens */
    chickenWalkingAnimation;
    /** Interval for the movement of the chickens */
    chickenMoving;
    /** Intervall for the dead animation of the chickens */
    chickenFall;

    /** Set a chicken object which is movable */
    constructor() {
        super();

        this.x = 400 + Math.random() * 2100;
        this.speed = 0.15 + Math.random() * 0.25;

        this.animate();
    }

    /** Animate the movement and the images of the chickens */
    animate() {
        this.chickenMoving = setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

        this.chickenWalkingAnimation = setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 200);
    }

    /** Clear the interval for the movement and let the chicken fall */
    killed(img) {
        chicken_dead_sound.play();
        clearInterval(this.chickenMoving);
        clearInterval(this.chickenWalkingAnimation);
        this.loadImage(img);
        this.xCollision = -200;

        this.chickenFall = setInterval(() => {
            this.y++;
        }, 1000 / 60);
    }
}