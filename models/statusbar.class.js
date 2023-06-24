class Statusbar extends DrawableObject {
    percentage;
    BAR_IMAGES;
    x = 20;
    height = 50;
    width = 175;

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.BAR_IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 75) {
            return 4;
        } else if (this.percentage > 50) {
            return 3;
        } else if (this.percentage > 25) {
            return 2;
        } else if (this.percentage > 0) {
            return 1;
        } else {
            return 0;
        }
    }
}