class DrawableObject {
    img;
    imageCache = [];
    currentImage = 0;
    x;
    y;
    height = 150;
    width = 100;
    speed = 0.15;
    collectedBottles = 0;
    collectedCoins = 0;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    // drawFrame(ctx) {
    //     if (this instanceof Chicken) {
    //         ctx.beginPath();
    //         ctx.lineWidth = '5';
    //         ctx.strokeStyle = 'blue';
    //         ctx.rect(this.xCollision, this.yCollision, this.widthCollision, this.heightCollision);
    //         ctx.stroke();
    //     }
    // }
    
    // drawCharacterFrame(ctx) {
    //     if (this instanceof ThrowableObject) {
    //         ctx.beginPath();
    //         ctx.lineWidth = '5';
    //         ctx.strokeStyle = 'red';
    //         ctx.rect(this.xCollision, this.yCollision, this.widthCollision, this.heightCollision);
    //         ctx.stroke();
    //     }
    // }

    isColliding(object) {
        return this.xCollision + this.widthCollision > object.xCollision &&
            this.yCollision + this.heightCollision > object.yCollision &&
            this.xCollision < object.widthCollision + object.xCollision &&
            this.yCollision < object.heightCollision + object.yCollision;
    }

    collect(object) {
        object.xCollision = -200;
        object.x = -200;
        if (object instanceof Bottle) {
            sounds[bottle_sound.play()];
            this.collectedBottles += 10;
        } else {
            sounds[coin_sound.play()];
            this.collectedCoins +=10;
        }
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
}