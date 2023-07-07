class World {
    character = new Character();
    level = level1;
    enemies = this.level.enemies;
    endboss = this.enemies[this.enemies.length - 1]
    clouds = this.level.clouds;
    backgroundObjects = this.level.backgroundObjects;
    collectables = this.level.collectables;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusbarHealth = new StatusbarHealth();
    statusbarCoins = new StatusbarCoins();
    statusbarBottles = new StatusbarBottles();
    throwableObjects = [];
    objectIsThrowable = true;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;

        this.draw();
        this.run();
        this.setWorld();
    }

    run() {
        setInterval(() => {
            this.checkEnemyCollision();
            this.throwObject();
        }, 150);
        setInterval(() => {
            this.checkEnemyHit();
            this.checkObjectCollision();
        }, 10);
    }

    throwObject() {
        if (this.keyboard.D && this.statusbarBottles.percentage > 0 && this.objectIsThrowable) {
            sounds[throw_sound.play()];
            let bottle = new ThrowableObject(this.character.x + 60, this.character.y + 100);
            this.throwableObjects.push(bottle);
            // bottle.speedY = 20;
            this.statusbarBottles.setPercentage(this.character.collectedBottles -= 10);
        }
    }

    checkEnemyCollision() {
        this.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !(this.character.endbossIsDead)) {
                this.character.hit();
                this.statusbarHealth.setPercentage(this.character.energy);
            }
        });
    }

    checkObjectCollision() {
        this.collectables.forEach((object) => {
            if (this.character.isColliding(object)) {
                this.character.collect(object);
                this.statusbarCoins.setPercentage(this.character.collectedCoins);
                this.statusbarBottles.setPercentage(this.character.collectedBottles);
            }
        });
    }

    checkEnemyHit() {
        this.enemies.forEach((enemy) => {
            if ((this.character.isJumpOf(enemy) && this.character.speedY <= 0 && enemy instanceof Chicken) || (this.throwableObjects.length > 0 && this.lastThrowedObjectColliding(enemy) && enemy instanceof Chicken)) {
                enemy.killed(enemy.IMAGE_DEAD);
            } else if (this.throwableObjects.length > 0 && enemy instanceof Endboss && this.lastThrowedObjectColliding(this.endboss) && this.endboss.energy > 0) {
                this.endboss.hit();
                // console.log(this.endboss.energy);
            }
        });
    }

    lastThrowedObjectColliding(enemy) {
        return this.throwableObjects[this.throwableObjects.length - 1].isColliding(enemy);
    }

    setWorld() {
        this.character.world = this;
        this.endboss.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.backgroundObjects);
        this.addObjectsToMap(this.clouds);

        this.ctx.translate(-this.camera_x, 0);

        this.addToMap(this.statusbarHealth);
        this.addToMap(this.statusbarCoins);
        this.addToMap(this.statusbarBottles);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.collectables);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);
        this.addToMap(this.endboss);
        this.addObjectsToMap(this.throwableObjects);

        this.ctx.translate(-this.camera_x, 0);

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });

    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) this.flipImage(mo);
        mo.draw(this.ctx);
        // mo.drawFrame(this.ctx);
        // mo.drawCharacterFrame(this.ctx);
        if (mo.otherDirection) this.flipImageBack(mo);
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.translate(mo.widthCollision - 110, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * - 1;
        mo.xCollision = mo.x + 20;
    }

    flipImageBack(mo) {
        mo.x = mo.x * - 1;
        mo.xCollision = mo.x + 20;
        this.ctx.restore();
    }
}