class StatusbarCoins extends Statusbar {
    /** Images to set the statusbar of the collected coins */
    BAR_IMAGES = [
        'assets/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
        'assets/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
        'assets/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
        'assets/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
        'assets/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
        'assets/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png'
    ];

    /** 
     * Loads the images
     * Sets the coordinates where the statusbar should be
     * Sets the percentage of the collected coins 
     */
    constructor() {
        super();
        this.loadImages(this.BAR_IMAGES);
        this.y = 45;
        this.percentage = 0;
        this.setPercentage(this.percentage);
    }
}