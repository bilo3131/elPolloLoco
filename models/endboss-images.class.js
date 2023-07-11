class EndbossImages {
    /** Images of the endboss for the walking act */
    walking;
    /** Images of the endboss for the alert act */
    alert;
    /** Images of the endboss for the attack act */
    attack;
    /** Images of the endboss by getting damage */
    hurt;
    /** Images of the endboss by getting killed */
    dead;

    /** To set the images of the endboss
     * @param {Object} walking - Images for walking
     * @param {Object} alert - Images for alert the chickens
     * @param {Object} attack - Images for attack the character
     * @param {Object} hurt - Images for get damage
     * @param {Object} dead - Images for dead
     */
    constructor(walking, alert, attack, hurt, dead) {
        this.walking = walking;
        this.alert = alert;
        this.attack = attack;
        this.hurt = hurt;
        this.dead = dead;
    }
}