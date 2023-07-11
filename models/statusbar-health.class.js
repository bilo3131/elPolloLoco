class StatusbarHealth extends Statusbar {
    /** Images to set the statusbar of the current health */
    BAR_IMAGES = [
        'assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png',
        'assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png',
        'assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',
        'assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',
        'assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png',
        'assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png'
    ];

    /** 
     * Loads the images
     * Sets the coordinates where the statusbar should be
     * Sets the percentage of the health 
     */
    constructor() {
        super();
        this.loadImages(this.BAR_IMAGES);
        this.y = 0;
        this.percentage = 100;
        this.setPercentage(this.percentage);
    }
}