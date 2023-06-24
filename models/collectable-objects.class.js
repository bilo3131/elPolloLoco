class CollactableObjects extends DrawableObject {
    collectedBottles = 0;
    collectedCoins = 0;

    constructor() {
        super();
        this.x = 300 + Math.random() * 1700;
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_OBJECTS)
        }, 500);
    }
}