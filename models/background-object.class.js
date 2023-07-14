class BackgroundObject extends MovableObject {
    /** Width of the movable object */
    width = 720;
    /** Height of the movable object */
    height = 480;
    
    /**
     * Sets the objects measures
     * @param {Path2D} imagePath - Current image of the object
     * @param {Number} x - X-Axis of the current object
     */
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 0;
    }
}