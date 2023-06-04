const level1 = new Level(
    [
        new SmallChicken(),
        new Chicken(),
        new SmallChicken(),
        new SmallChicken(),
        new Chicken(),
        new Chicken(),
        new SmallChicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new SmallChicken(),
        new SmallChicken(),
        new Chicken(),
        new SmallChicken(),
        new SmallChicken(),
        new Endboss()
    ],

    [
        new Clouds('assets/img/5_background/layers/4_clouds/1.png' ,0),
        new Clouds('assets/img/5_background/layers/4_clouds/2.png' ,0+500),
        new Clouds('assets/img/5_background/layers/4_clouds/1.png' ,500*2),
        new Clouds('assets/img/5_background/layers/4_clouds/2.png' ,500*2+500),
        new Clouds('assets/img/5_background/layers/4_clouds/1.png' ,500*4),
        new Clouds('assets/img/5_background/layers/4_clouds/2.png' ,500*4+500),
        new Clouds('assets/img/5_background/layers/4_clouds/1.png' ,500*6),
        new Clouds('assets/img/5_background/layers/4_clouds/2.png' ,500*6+500),
        new Clouds('assets/img/5_background/layers/4_clouds/1.png' ,500*8),
        new Clouds('assets/img/5_background/layers/4_clouds/2.png' ,500*8+500),
        new Clouds('assets/img/5_background/layers/4_clouds/1.png' ,500*10),
        new Clouds('assets/img/5_background/layers/4_clouds/2.png' ,500*10+500)
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
        new BackgroundObject('assets/img/5_background/layers/air.png', 719*2),
        new BackgroundObject('assets/img/5_background/layers/3_third_layer/1.png', 719*2),
        new BackgroundObject('assets/img/5_background/layers/2_second_layer/1.png', 719*2),
        new BackgroundObject('assets/img/5_background/layers/1_first_layer/1.png', 719*2),
        new BackgroundObject('assets/img/5_background/layers/air.png', 719*3),
        new BackgroundObject('assets/img/5_background/layers/3_third_layer/2.png', 719*3),
        new BackgroundObject('assets/img/5_background/layers/2_second_layer/2.png', 719*3),
        new BackgroundObject('assets/img/5_background/layers/1_first_layer/2.png', 719*3)
    ]
);