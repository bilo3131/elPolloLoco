class Cloud extends MovableObject {
    /** Y-Axis of the cloud */
    y = 50;
    /** Width of the clouds */
    width = 500;
    /** Height of the clouds */
    height = 250;

    /**
     * Load a cloud object
     * @param {Path2D} imagePath - Path for the image of the cloud
     * @param {Number} x - X-Axis of the cloud
     */
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.animate();
    }

    /** Animation for the clouds */
    animate() {
        // intervals.cloudAnimation = 
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }
}