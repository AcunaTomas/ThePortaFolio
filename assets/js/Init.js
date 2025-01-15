var ScreenWd = 1200
var ScreenHt = 720

var config = {
    type: Phaser.WEBGL,
    width: ScreenWd,
    height: ScreenHt,
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: [Ini,Gameplay] 
    
};

var player;
var stars;
var silvers;
var bombs;
var platforms;
var cursors;
var score = 0;
var gameOver = false;
var coolcam;
var WorldWalls
var ground;
var gameovercount = 0;
var scoreText;
var gText;
var lvl = 1;
var door;
var doorstatus = "closed"
var camx;
var camy;
var ncamx;
var ncamy;
var starx;
var scoreobj;
var heart;
var spid = 3;
var bulla;
var game = new Phaser.Game(config);