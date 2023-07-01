let level1;

function initLevel() {
    level1 = new Level(
        [
            new NormalChicken(),
            new NormalChicken(),
            new NormalChicken(),
            new NormalChicken(),
            new NormalChicken(),
            new NormalChicken(),
            new NormalChicken(),
            new SmallChicken(),
            new SmallChicken(),
            new SmallChicken(),
            new SmallChicken(),
            new SmallChicken(),
            new SmallChicken(),
            new SmallChicken(),
            new Endboss()
        ],

        [
            new Cloud('assets/img/5_background/layers/4_clouds/1.png', 0),
            new Cloud('assets/img/5_background/layers/4_clouds/2.png', 500),
            new Cloud('assets/img/5_background/layers/4_clouds/1.png', 500 * 2),
            new Cloud('assets/img/5_background/layers/4_clouds/2.png', 500 * 3),
            new Cloud('assets/img/5_background/layers/4_clouds/1.png', 500 * 4),
            new Cloud('assets/img/5_background/layers/4_clouds/2.png', 500 * 5),
            new Cloud('assets/img/5_background/layers/4_clouds/1.png', 500 * 6),
            new Cloud('assets/img/5_background/layers/4_clouds/2.png', 500 * 7),
            new Cloud('assets/img/5_background/layers/4_clouds/1.png', 500 * 8),
            new Cloud('assets/img/5_background/layers/4_clouds/2.png', 500 * 9),
            new Cloud('assets/img/5_background/layers/4_clouds/1.png', 500 * 10),
            new Cloud('assets/img/5_background/layers/4_clouds/2.png', 500 * 11)
        ],

        [
            new BackgroundObject('assets/img/5_background/layers/air.png', -719),
            new BackgroundObject('assets/img/5_background/layers/3_third_layer/2.png', -719),
            new BackgroundObject('assets/img/5_background/layers/2_second_layer/2.png', -719),
            new BackgroundObject('assets/img/5_background/layers/1_first_layer/2.png', -719),
            new BackgroundObject('assets/img/5_background/layers/air.png', 0),
            new BackgroundObject('assets/img/5_background/layers/3_third_layer/1.png', 0),
            new BackgroundObject('assets/img/5_background/layers/2_second_layer/1.png', 0),
            new BackgroundObject('assets/img/5_background/layers/1_first_layer/1.png', 0),
            new BackgroundObject('assets/img/5_background/layers/air.png', 719),
            new BackgroundObject('assets/img/5_background/layers/3_third_layer/2.png', 719),
            new BackgroundObject('assets/img/5_background/layers/2_second_layer/2.png', 719),
            new BackgroundObject('assets/img/5_background/layers/1_first_layer/2.png', 719),
            new BackgroundObject('assets/img/5_background/layers/air.png', 719 * 2),
            new BackgroundObject('assets/img/5_background/layers/3_third_layer/1.png', 719 * 2),
            new BackgroundObject('assets/img/5_background/layers/2_second_layer/1.png', 719 * 2),
            new BackgroundObject('assets/img/5_background/layers/1_first_layer/1.png', 719 * 2),
            new BackgroundObject('assets/img/5_background/layers/air.png', 719 * 3),
            new BackgroundObject('assets/img/5_background/layers/3_third_layer/2.png', 719 * 3),
            new BackgroundObject('assets/img/5_background/layers/2_second_layer/2.png', 719 * 3),
            new BackgroundObject('assets/img/5_background/layers/1_first_layer/2.png', 719 * 3)
        ],

        [
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin()
        ]
    );
}
