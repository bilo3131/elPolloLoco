class Clouds extends MovableObject{
    y = 50;
    width = 500;
    height = 250;
    
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        // x += Math.random() * 500;
        this.animate();
    }

    animate() {
        this.moveLeft();
    }
}