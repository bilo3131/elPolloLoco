class Statusbar extends DrawableObject {
    /** The percentage of the respective bar */
    percentage;
    /** The images of the bar elements */
    BAR_IMAGES;
    /** X-axis of the bars */
    x = 20;
    /** Height of the bars */
    height = 50;
    /** Width of the bars */
    width = 175;

    /**
     * Set the percentage of the bar
     * @param {Number} percentage The percentage of the respective bar
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.BAR_IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * Check the percentage to return the index of the respective image
     * @returns The index of the image for the respective percentage
     */
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