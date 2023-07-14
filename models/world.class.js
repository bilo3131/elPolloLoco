class World {
    /** Instance of the character */
    character = new Character();
    /** Instance of the endboss */
    endboss = new Endboss();
    /** Instance of the healthbar */
    statusbarHealth = new StatusbarHealth();
    /** Instance of the coinsbar */
    statusbarCoins = new StatusbarCoins();
    /** Instance of the bottlesbar */
    statusbarBottles = new StatusbarBottles();
    /** To save all throwed bottles */
    throwableObjects = [];
    /** Instance of the throwed bottle */
    bottle;
    /** To check if the next bootle can be throwed */
    objectIsThrowable = true;
    /** Array where the objects are created */
    level = level1;
    /** Canvas where the objects are shown */
    canvas;
    /** Context of the canvas */
    ctx;
    /** Keybinds for the gameplay */
    keyboard;
    /** To move the camera with the character */
    camera_x = 0;

    /**
     * The whole world of the game
     * @param {Object} canvas - Canvas where the world drawed on
     * @param {Object} keyboard - Bind the keyboard in the game
     */
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;

        this.draw();
        this.run();
        this.setWorld();
    }

    /** Let the game starts the functions for the logic */
    run() {
        setInterval(() => {
            this.checkEnemyCollision();
            this.throwable();
        }, 150);
        setInterval(() => {
            this.checkEnemyHit();
            this.checkObjectCollision();
        }, 10);
    }

    /** Check if you can throw a bottle */
    throwable() {
        if (this.keyboard.D && this.statusbarBottles.percentage > 0 && this.objectIsThrowable && this.endbossIsLiving()) {
            this.throwBottle();
            this.nextBottle();
            sounds[throw_sound.play()];
        }
    }

    /** Let a bottle throw from the position where the character presently is */
    throwBottle() {
        this.bottle = new ThrowableObject(this.character.x + 60, this.character.y + 100);
        this.throwableObjects.push(this.bottle);
        this.statusbarBottles.setPercentage(this.character.collectedBottles -= 10);
    }

    /** Set a timeout to one second for throwing the next bottle */
    nextBottle() {
        this.objectIsThrowable = false;
        setTimeout(() => {
            this.objectIsThrowable = true;
        }, 1500);
    }

    /** Check if an enemy is colliding the character */
    checkEnemyCollision() {
        this.level.enemies.forEach((enemy) => {
            this.damageCharacter(enemy);
        });
        this.damageCharacter(this.endboss);
    }

    /** Hurt the character and update the percentage of its life */
    damageCharacter(enemy) {
        if (this.character.isColliding(enemy) && !(this.endboss.endbossIsDead)) {
            this.character.hit();
            this.statusbarHealth.setPercentage(this.character.energy);
        }
    }

    /** Check if the character collides to collect a bottle or a coin */
    checkObjectCollision() {
        this.level.collectables.forEach((object) => {
            if (this.character.isColliding(object)) {
                this.collectObject(object);
            }
        });
    }

    /** Collect the respective collectable object and update the belonging bar */
    collectObject(object) {
        this.character.collect(object);
        this.statusbarCoins.setPercentage(this.character.collectedCoins);
        this.statusbarBottles.setPercentage(this.character.collectedBottles);
    }

    /** Check if the character kills an enemy or hits the endboss */
    checkEnemyHit() {
        this.level.enemies.forEach((enemy) => {
            if ((this.character.isJumpOf(enemy) && this.isCharacterFalling()) || (this.throwableObjects.length > 0 && this.throwedObject(enemy))) {
                enemy.killed(enemy.IMAGE_DEAD);
            }
        });
        if (this.throwableObjects.length > 0 && this.bottle.isColliding(this.endboss) && this.endbossIsLiving()) {
            this.endboss.hit();
        }
    }

    /**
     * @returns true if the endoss has still life
     */
    endbossIsLiving() {
        return this.endboss.energy > 0;
    }

    /**
     * @returns true if the character is falling
     */
    isCharacterFalling() {
        return this.character.speedY <= 0;
    }

    /**
     * @param {Object} enemy - Can be the endboss, chicks or chickens
     * @returns true if the throwed bottle collides an enemy
     */
    throwedObject(enemy) {
        return this.bottle.isColliding(enemy);
    }

    /** Set this world to the endboss and character objects to interact with values */
    setWorld() {
        this.character.world = this;
        this.endboss.world = this;
    }

    /** 
     * Draw the world on the canvas.
     * First the canvas will be cleared by call this function and redraw all objects.
     * If all objects drawn the function will be call itself and repeat the process.
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addBackgroundObject();
        this.ctx.translate(-this.camera_x, 0);
        this.addStatusbarElements();
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToInteract();
        this.ctx.translate(-this.camera_x, 0);
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    /** Add the objects which can interact with other objects something like colliding or killing */
    addObjectsToInteract() {
        this.addObjectsToMap(this.level.collectables);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addToMap(this.endboss);
        this.addObjectsToMap(this.throwableObjects);
    }

    /** Add the bar elements to show the current stats */
    addStatusbarElements() {
        this.addToMap(this.statusbarHealth);
        this.addToMap(this.statusbarCoins);
        this.addToMap(this.statusbarBottles);
    }

    /** Add the background objects like the ground the clouds and the hills in the background */
    addBackgroundObject() {
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
    }

    /**
     * To add the objects which are more than once in the game
     * @param {Array} objects - Multiple objects which should be drawn on the canvas
     */
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    /**
     * To add the seperate object in the game 
     * @param {Object} mo - Seperate object which should be drwan on the canvas
     */
    addToMap(mo) {
        if (mo.otherDirection) this.flipImage(mo);
        mo.draw(this.ctx);
        if (mo.otherDirection) this.flipImageBack(mo);
    }

    /**
     * To flip the Images of the objects by turning around with the character
     * @param {Object} mo - Movable object by turn the character around
     */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.translate(mo.widthCollision - 110, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * - 1;
        mo.xCollision = mo.x + 20;
    }

    /**
     * To flip the Images of the objects back by turning around with the character
     * @param {Object} mo - Movable object by turn the character around
     */
    flipImageBack(mo) {
        mo.x = mo.x * - 1;
        mo.xCollision = mo.x + 20;
        this.ctx.restore();
    }
}