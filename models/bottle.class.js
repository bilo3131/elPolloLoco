class Bottle extends CollectableObjects {
    /** Y-Axis of the collectable bottle */
    y = 370;
    /** Height of the collectable bottle */
    height = 50;
    /** Width of the collectable bottle */
    width = 80;
    /** Is needed for the collision with the character */
    xCollision = this.x + 30;
    /** Is needed for the collision with the character */
    yCollision = this.y;
    /** Is needed for the collision with the character */
    widthCollision = this.width - 55;
    /** Is needed for the collision with the character */
    heightCollision = this.height;
    /** Images of the collectable bottle */
    IMAGES_OBJECTS = [
        'assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        'assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ];

    /** Sets the object of the bottles on the ground */
    constructor() {
        super().loadImage(this.IMAGES_OBJECTS[0]);
        this.loadImages(this.IMAGES_OBJECTS)
        this.animate();
    }
}