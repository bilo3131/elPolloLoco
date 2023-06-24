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

    drawFrame(ctx) {
        if (this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.xCollision, this.yCollision, this.widthCollision, this.heightCollision);
            ctx.stroke();
        }
    }
    
    drawCharacterFrame(ctx) {
        if (this instanceof Character) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x + 30, this.y + 100, this.width - 60, this.height - 110);
            ctx.stroke();
        }
    }

    isColliding(object) {
        return this.x + this.width - 30 > object.xCollision &&
            this.y + this.height - 10 > object.yCollision &&
            this.x + 30 < object.widthCollision + object.xCollision &&
            this.y + 100 < object.heightCollision + object.yCollision;
    }

    collect(object) {
        object.xCollision = -150;
        object.yCollision = -150;
        object.x = -150;
        object.y = -150;
        if (object instanceof Bottle) {
            this.collectedBottles += 10;
        } else {
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