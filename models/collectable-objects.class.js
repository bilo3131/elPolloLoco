class CollactableObjects extends DrawableObject {
    collected = false;

    constructor() {
        super();
        this.x = 300 + Math.random() * 1700;
    }
}