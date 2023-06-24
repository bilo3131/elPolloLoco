class World {
    character = new Character();
    level = level1;
    enemies = level1.enemies;
    clouds = level1.clouds;
    backgroundObjects = level1.backgroundObjects;
    collectables = level1.collectables;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusbarHealth = new StatusbarHealth();
    statusbarCoins = new StatusbarCoins();
    statusbarBottles = new StatusbarBottles();
    throwableObjects = [];

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        this.checkKill();
    }

    run() {
        setInterval(() => {
            this.checkEnemyCollision();
            this.checkObjectCollision();
            this.checkThrowObjects();
        }, 200);
    }

    checkThrowObjects() {
        if (this.keyboard.D && this.statusbarBottles.percentage > 0) {
            let bottle = new ThrowableObject(this.character.x + 60, this.character.y + 100);
            this.throwableObjects.push(bottle);
            this.statusbarBottles.setPercentage(this.character.collectedBottles -= 10);
        }
    }

    checkEnemyCollision() {
        this.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
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

    checkKill() {
        setInterval(() => {
            this.enemies.forEach((enemy) => {
                if (this.character.isJumpOf(enemy) && enemy instanceof Chicken) {
                    enemy.killed(enemy.IMAGE_DEAD);
                }
            });
        }, 40);
    }

    setWorld() {
        this.character.world = this;
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
        this.ctx.translate(mo.collisionWidth, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * - 1;
        mo.collisionX = -mo.collisionX;
    }

    flipImageBack(mo) {
        mo.x = mo.x * - 1;
        mo.collisionX = -mo.collisionX;
        this.ctx.restore();
    }
}