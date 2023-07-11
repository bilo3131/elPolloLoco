class CollectableObjects extends DrawableObject {
    /** Images of the respective collectable object */
    IMAGES_OBJECTS;

    /** Position the collectable objects randomly on the X-Axis */
    constructor() {
        super();
        this.x = 300 + Math.random() * 1700;
    }

    /** Animate the collectable objects */
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_OBJECTS)
        }, 500);
    }
}