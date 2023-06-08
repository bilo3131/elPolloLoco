class CollactableObjects {
    x = 300;
    y;
    img;
    height;
    width;
    currentImage = 0;
    imageCache = [];
    collected = false;

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

    playAnimation(images, i) {
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
}