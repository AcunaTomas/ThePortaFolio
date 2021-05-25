class Ini extends Phaser.Scene
{
    constructor()
    {
        super('Ini')
    }
    preload ()
    {

    this.load.setBaseURL('http://127.0.0.1:5500');
    //images
    this.load.image('load', '../../Assets/Game/Loadingstr.png')
    this.load.image('sky', '../../Assets/Game/sky.png');
    this.load.image('ground', '../../Assets/Game/platform.png');
    this.load.image('star', '../../Assets/Game/star.png');
    this.load.image('bomb', '../../Assets/Game/bomb.png');
    this.load.spritesheet('dude', '../../Assets/Game/dude.png', { frameWidth: 32, frameHeight: 48 });
    this.load.image('WGround', '../../Assets/Game/Ground.png');
    this.load.image('WWall', '../../Assets/Game/Wall.png');
    this.load.image('door', '../../Assets/Game/Door.png')
    //sounds
    this.load.audio('ascent', '../../Assets/Game/Sounds/Ascent.wav');
    this.load.audio('descent', '../../Assets/Game/Sounds/Descent.wav');
    this.load.audio('g', '../../Assets/Game/Sounds/GameHover.wav');
    }

    create()
    {
        var ta
        ta = this.add.text(275, 375, 'Score: 0', { fontSize: '28px', fill: '#FFF' });
        var a
        a = this.add.image(400,360, 'load')
        ta.setText('Click the star!')
        a.setInteractive()
        a.on('pointerdown', () => this.scene.start('Gameplay') ); 
    }  
}

