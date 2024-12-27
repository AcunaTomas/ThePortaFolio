class Gameplay extends Phaser.Scene
{
    constructor ()
    {
        super('Gameplay')
    }

    create ()
    {
    //  A simple background for our game
    //this.add.image(1920, 300, 'sky');
    // Setting up the camera
    coolcam= this.cameras.main;
    this.cameras.main.setBounds(0,0,3840,720);
    camx = 400;
    camy = 0;
    ncamx = 400;
    ncamy = 0;

    platforms = this . physics . add . staticGroup () ;
    ground = this.physics.add.staticGroup();
    WorldWalls= this.physics.add.staticGroup();
    scoreText = this.add.text(20, 300, 'Score: 0', { fontSize: '28px', fill: '#000' });
    scoreText.setText("What do you mean this isn't a good framework?");
    scoreText.scrollFactorX = 0;
    scoreText.scrollFactorY = 0;

    heart = this.add.sprite(400,300,'heart');
    cursors = this.input.keyboard.createCursorKeys();
    }

    update()
    {
        if (cursors.left.isDown)
        {
            heart.x -= 1 * spid;
        }
        if (cursors.right.isDown)
        {
            heart.x += 1 * spid;
        }
        if (cursors.up.isDown)
        {
            heart.y -= 1 * spid;
        }
        if (cursors.down.isDown)
        {
            heart.y += 1 * spid;
        }
    }
    //  The platforms group contains the ground and the 2 ledges we can jump on
/*     platforms = this . physics . add . staticGroup () ;
    ground = this.physics.add.staticGroup();
    WorldWalls= this.physics.add.staticGroup();

    //  Here we create the ground.
    ground.create(1920,620, 'WGround');
    ground.create(1920,0, 'WGround');
    //  Now let's create some ledges
    platforms.create(0,550,'ground');
    platforms.create(0,150,'ground');
    platforms.create(400,300, 'ground')
    platforms.create(1200,450, 'ground');
    platforms.create(1200,200,'ground');
    platforms.create(1670,400,'ground');
    platforms.create(1670,200,'ground');
    platforms.create(1970,400,'ground');
    platforms.create(1970,200,'ground');
    //World Bounds
    WorldWalls.create(-10,300, 'WWall');
    WorldWalls.create(3872,400, 'WWall');
    WorldWalls.create(800,180, 'WWall');
    WorldWalls.create(1600,180, 'WWall');
    WorldWalls.create(2400,180, 'WWall');
    WorldWalls.create(3200,180, 'WWall');

    // The player and its settings
    player = this.physics.add.sprite(100, 450, 'dude');

    player.setCollideWorldBounds(false);

    //  Our player animations, turning, walking left and walking right.
    if (gameovercount < 1)
    {
        this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
        });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
        });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
        });

    }


    //  Input Events
    cursors = this.input.keyboard.createCursorKeys();

    //  Some stars to collect
    starx = 20
    stars = this.physics.add.group({
        key: 'star',
        repeat: 4,
        setXY: { x: starx, y: 0, stepX: 120 }
    });
    silvers = this.physics.add.group({
        key: 'load',
        repeat: 4,
        setXY: { x: starx + 6, y: 300, stepX: 120 }
    });
    stars.children.iterate(function (child) {

        //  Give each star a slightly different bounce
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

    });
    
    door = this.physics.add.staticGroup();
    door.create(800,572, 'door');
    door.create(1600,572, 'door');
    door.create(2400,572, 'door');
    door.create(3200,572, 'door');


    bombs = this.physics.add.group();
    
    //  The score
    scoreobj = 200
    scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '28px', fill: '#000' });
    scoreText.scrollFactorX = 0;
    scoreText.scrollFactorY = 0;
    // Game Over Text
    gText = this.add.text(50, 360, '', { fontSize: '72px', fill: '#000' });
    gText.scrollFactorX = 0;
    gText.scrollFactorY = 0;
    //  Collide the player and the stars with the floor and platforms
    this.physics.add.collider(player, platforms);
    this.physics.add.collider(player, WorldWalls);
    this.physics.add.collider(player, ground);
    this.physics.add.collider(silvers, platforms);
    this.physics.add.collider(silvers, ground);
    this.physics.add.collider(stars, platforms);
    this.physics.add.collider(stars, ground);
    this.physics.add.collider(stars, WorldWalls);
    this.physics.add.collider(ground, door);
    this.physics.add.collider(player, door);
    this.physics.add.collider(bombs, door);
    this.physics.add.collider(bombs, platforms);
    this.physics.add.collider(bombs, ground);
    this.physics.add.collider(bombs, WorldWalls);

    //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
    this.physics.add.overlap(player, stars, this.collectStar, null, this);
    this.physics.add.overlap(player, silvers, this.collectStar, null, this);

    this.physics.add.collider(player, bombs, this.hitBomb, null, this);
    }
*/
   /* update ()
    {

        /* if (gameOver)
        {
            scoreText.setText('Final Score:' + score +'. Press shift to restart!');
            if (score >= 800)
            {
                gText.setText('YOURE WINNER!');
            }
            else
            {
                gText.setText('G.A.M.E.O.V.E.R.');
            }
            stars.clear(true, true);
            silvers.clear(true, true);
            this.physics.pause();
            player.setTint(0xff0000);
            player.anims.play('turn');

            if (cursors.shift.isDown)
            {
                gameOver = false
                score = 0;
                lvl = 1;
                starx = 0;
                ncamx = 400;
                scoreobj = 200;
                this.scene.restart();
            }
        }
        else
        {
            if (cursors.left.isDown)
            {
                player.setVelocityX(-160);

                player.anims.play('left', true);
            }
            else if (cursors.right.isDown)
            {
                player.setVelocityX(160);

                player.anims.play('right', true);
            }
            else
            {
                player.setVelocityX(0);

                player.anims.play('turn');
            }

            if (cursors.up.isDown && player.body.blocked.down)
            {
                player.setVelocityY(-440);
            }
        //if (Phaser.Input.Keyboard.JustDown(cursors.shift))
        //{
        //    lvl += 2;
        //    ncamx += 800
        //    opcls()
        //}
            if (score >= scoreobj && doorstatus == "closed")
            {
                lvl += 1;
                ncamx += 800
                this.opcls()
                if (ncamx >= 3000)
                {
                    gameOver = true
                    gameovercount += 1
                    stars.clear(true, true);
                    silvers.clear(true, true);
                }
                starx += 800
                scoreobj += 200
                
            }
            if (ncamx > camx)
            {
                camx = player.x
                bombs.clear(true,true);
            }
            else
            {
                if (doorstatus == "open" && gameOver == false)
                {
                    this.opcls()
                    this.createstars()
                }
    
            }
            coolcam.centerOn(camx,camy) 
    } */
    
    
/*
    collectStar (player, star)
    {
        star.destroy(true,true);

        //  Add and update the score
        score += 20;
        scoreText.setText('Score: ' + score);

        if (stars.countActive(true) === 0 && score < scoreobj)
        {
            this.createstars()

        }
    }

    createstars ()
    {
    //  A new batch of stars to collect
    var a
    a = 120
    var i
    for (i=0; i<5; i++)
        {
            stars.create(starx+a,10, 'star');
            silvers.create(starx+a+6,200, 'load')
            a += 120
        }
    
    var x = camx + Phaser.Math.Between(-200, 200);
    var c
    for (c=0;c<=lvl;c++)
    {
        bombs.create(x, 16, 'bomb').setBounce(0.9).setCollideWorldBounds(false).setVelocity(Phaser.Math.Between(-200, 200), 20);
    }
    

    }

    hitBomb (player, bomb)
    {
        gameOver = true;
        this.sound.play('g')
        gameovercount += 1
    }

    opcls ()
    {
        if (doorstatus == "closed")
        {
            door.children.iterate(function (child){
            child.disableBody(true,true);
            })
            doorstatus = "open"
        }
        else
        {
            door.children.iterate(function (child){
            child.enableBody(true,child.x, child.y, true, true);
            })
            doorstatus="closed"
        }
    } */
}
