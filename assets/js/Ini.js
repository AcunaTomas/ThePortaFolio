class Ini extends Phaser.Scene
{
    constructor()
    {
        super('Ini')
    }
    preload ()
    {

    //images
    this.load.image('load', '../../assets/Game/Loadingstr.png')
    this.load.image('sky', '../../assets/Game/sky.png');
    this.load.image('ground', '../../assets/Game/platform.png');
    this.load.image('star', '../../assets/Game/star.png');
    this.load.image('bomb', '../../assets/Game/bomb.png');
    this.load.spritesheet('dude', '../../assets/Game/dude.png', { frameWidth: 32, frameHeight: 48 });
    this.load.image('WGround', '../../assets/Game/Ground.png');
    this.load.image('WWall', '../../assets/Game/wall.png');
    this.load.image('door', '../../assets/Game/Door.png')
    //sounds
    this.load.audio('ascent', '../../assets/Game/Sounds/Ascent.wav');
    this.load.audio('descent', '../../assets/Game/Sounds/Descent.wav');
    this.load.audio('g', '../../assets/Game/Sounds/GameHover.wav');
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

