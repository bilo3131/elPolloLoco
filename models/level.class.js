class Level {
    /** Enemies and the endboss in this level */
    enemies;
    /** Clouds in this level */
    clouds;
    /** Background objects in this level */
    backgroundObjects;
    /** Collectable objects in this level */
    collectables;
    /** The x-axis for the end of the level */
    level_end_x = 738 * 3;

    /**
     * Set the entire objects in the world
     * @param {Object} enemies - Enemies on this level
     * @param {Object} clouds - Clouds on this level
     * @param {Object} backgroundObjects - Background objects on this level
     * @param {Object} collectables - Collectable objects on this level
     */
    constructor(enemies, clouds, backgroundObjects, collectables) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.collectables = collectables;
    }
}