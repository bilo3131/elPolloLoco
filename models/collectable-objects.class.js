class CollactableObjects extends DrawableObject {
    x;
    y;
    img;
    height;
    width;
    currentImage = 0;
    imageCache = [];
    collected = false;

    constructor() {
        super();
        this.x = 300 + Math.random() * 1700;
    }
}