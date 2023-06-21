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
    statusBar = new StatusBar();

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
        this.checkKill();
    }

    checkCollisions() {
        setInterval(() => {
            this.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {
                    this.character.hit();
                    this.statusBar.setPercentage(this.character.energy);
                }
            });
            this.collectables.forEach((object) => {
                if (this.character.isColliding(object)) {
                    this.character.collect(object);
                    console.log(object);
                }
            });
        }, 250);
    }
    
    checkKill() {
        setInterval(() => {
            this.enemies.forEach((enemy) => {
                if (this.character.isJumpOf(enemy) && enemy instanceof Chicken) {
                    enemy.isKilled(enemy.IMAGE_DEAD);
                    this.character.jump();
                    // this.character.isAboveGround();
                    console.log(this.character.y);
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

        this.addToMap(this.statusBar);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.collectables);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);

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
        mo.drawFrame(this.ctx);
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