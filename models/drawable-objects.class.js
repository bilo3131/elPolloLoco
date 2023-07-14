class DrawableObject {
    /** Present image as an Image-Object */
    img;
    /** Entire images of the respective drawable object for the animation */
    imageCache = [];
    /** Current image to show on the canvas for the animation */
    currentImage = 0;
    /** X-Axis of the respective object */
    x;
    /** Y-Axis of the respective object */
    y;
    /** Height of the respective object */
    height = 150;
    /** Width of the respective object */
    width = 100;
    /** Speed of the respective movable object */
    speed = 0.15;
    /** Counter for the collected bottles */
    collectedBottles = 0;
    /** Counter for the collected coiins */
    collectedCoins = 0;

    /**
     * Load one image
     * @param {Path2D} path - Path of the respective image
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * Load several images and save them in the imageCache-Array
     * @param {Array} arr - Contains the paths of the images
     */
    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    /**
     * Draw the object on the canvas
     * @param {CanvasRenderingContext2D} ctx - The context of the canvas
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    /**
     * Check if the character collides to an object
     * @param {Object} object - Can be an enemy or a collectable object 
     * @returns if its true the collision with the respective object
     */
    isColliding(object) {
        return this.xCollision + this.widthCollision > object.xCollision &&
            this.yCollision + this.heightCollision > object.yCollision &&
            this.xCollision < object.widthCollision + object.xCollision &&
            this.yCollision < object.heightCollision + object.yCollision;
    }

    /**
     * Collect bottle or coin and vanish the respective object
     * @param {Object} object The respective collectable object
     */
    collect(object) {
        object.xCollision = -200;
        object.x = -200;
        if (object instanceof Bottle) {
            this.collectBottle();
        } else {
            this.collectCoin();
        }
    }

    /** Count up the bottle and play sound */
    collectBottle() {
        sounds[bottle_sound.play()];
        this.collectedBottles += 10;
    }

    /** Count up the coin and play sound */
    collectCoin() {
        sounds[coin_sound.play()];
        this.collectedCoins += 10;
    }

    /**
     * Play the animation by determine the length and repeat the frames
     * @param {Array} images - All images of an objects movement
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
}