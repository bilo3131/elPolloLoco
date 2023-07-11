class StatusbarBottles extends Statusbar {
    /** Images to set the statusbar of the collected bottles */
    BAR_IMAGES = [
        'assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png',
        'assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png',
        'assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png',
        'assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png',
        'assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png',
        'assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png'
    ];

    /** 
     * Loads the images
     * Sets the coordinates where the statusbar should be
     * Sets the percentage of the collected bottles 
     */
    constructor() {
        super();
        this.loadImages(this.BAR_IMAGES);
        this.y = 90;
        this.percentage = 0;
        this.setPercentage(this.percentage);
    }
}