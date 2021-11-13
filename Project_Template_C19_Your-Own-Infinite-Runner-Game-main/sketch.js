var box1, box2, boxGroup;
var alien, alienPic;
var checkpointSound, deadSound;
var groundImg, gameoverImg, alienImg;
var gamestate = "play";
var play = 1;
var end = 0;
var gameover;
var score;
var ground;

function preload(){
    checkpointSound = loadSound("checkpoint.mp3");
    deadSound = loadSound("collided.wav");

    groundImg = loadImage("cyber_background.jpg");
    gameoverImg = loadImage("gameOver.png");
    alienImg = loadImage("alien1.png","alien2.png");
}

function setup() {
    createCanvas(windowWidth,windowHeight);

    ground = createSprite(window.width/2,window.height/2,windowWidth,windowHeight);
    ground.addImage(groundImg)
    
    alien = createSprite(width-40,height/2);
    alien.addImage(alienImg);
    alien.setCollider("circle",0,0,50);

    gameover = createSprite(width/2,height/2);
    gameover.addImage(gameoverImg);
    gameover.visible = false;

    boxGroup = new Group();

    score = 0;

}

function draw() {
    background("grey");
    
    textSize(23);
    fill("white");
    text("Score: "+score,width/2,50);

    if (gamestate == play){
        
        if (keyDown(UP_ARROW)){
            alien.y = alien.y+1.5;
        }

        if(keyDown(DOWN_ARROW)){
            alien.y = alien.y-1.5;
        }

        spawnBoxes();

        drawSprites();
    }
}

function reset() {

}

function spawnBoxes() {

}