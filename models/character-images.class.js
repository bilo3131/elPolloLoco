class CharacterImages {
    /** Images of the character for the waiting act */
    waiting;
    /** Images of the character for the long waiting act */
    waitingLong;
    /** Images of the character for the walking act */
    walking;
    /** Images of the character for the jumping act */
    jumping;
    /** Images of the character by getting damage */
    hurt;
    /** Images of the character by getting killed */
    dead;

    /**
     * Set the Images for the acts of the character
     * @param {Object} waiting  - Images for waiting
     * @param {Object} waitingLong  - Images for long waiting
     * @param {Object} walking  - Images for walking
     * @param {Object} jumping  - Images for jumping
     * @param {Object} hurt  - Images for get damage
     * @param {Object} dead  - Images for dead
     */
    constructor(waiting, waitingLong, walking, jumping, hurt, dead) {
        this.waiting = waiting;
        this.waitingLong = waitingLong;
        this.walking = walking;
        this.jumping = jumping;
        this.hurt = hurt;
        this.dead = dead;
    }
}