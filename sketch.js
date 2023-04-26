var balloon, balloonImage;
var background, backgroundImage;
var obsTop, obsTop1, obsTop2, topObstacleGroup;
var obsBottom, obsBottom1, obsBottom2, obsBottom3, bottomObstacleGroup;
var bottomGround, topGround;


function preload(){
    balloonImage = loadAnimation("assets/balloon1.png", "assets/balloon2.png", "assets/balloon3.png");
    backgroundImage = loadImage("assets/bg.png");
    obsTop1 = loadImage("assets/obsTop1.png");
    obsTop2 = loadImage("assets/obsTop2.png");
    obsBottom1 = loadImage("assets/obsBottom1.png");
    obsBottom2 = loadImage("assets/obsBottom2.png");
    obsBottom3 = loadImage("assets/obsBottom3.png");


}

function setup(){
    createCanvas(1000,800);

    background = createSprite(1000,800, 100,100);
    background.addImage(backgroundImage);
    background.scale = 2.3;

    balloon = createSprite(150, 400, 100,100);
    balloon.addAnimation("balloon", balloonImage); 
    balloon.scale = 0.3; 
    
    bottomObstacleGroup = new Group();
    topObstacleGroup = new Group();
}

function draw() {
    
    if(keyDown("space")){
        balloon.velocityY = -0.5;
    }
   // add gravity to code
    balloon.velocityY = balloon.velocityY+2;
  spawnObstaclesBottom();

  drawSprites();
}

function spawnObstaclesBottom(){
    if(frameCount %60 === 0){
        obsBottom = createSprite(1050,400,50,50);
        obsBottom.velocityX = -4;
        obsBottom.y = Math.round(random(100,600));
        var rand = Math.round(random(1,3));
            switch(rand){
                case 1: obsBottom.addImage(obsBottom1);
                        break;
                case 2: obsBottom.addImage(obsBottom2);
                        break;
                case 3: obsBottom.addImage(obsBottom3);
                        break;
                default : break;
            }
        obsBottom.scale = 0.15;

        bottomObstacleGroup.add(obsBottom);
        balloon.depth = obsBottom.depth;
        balloon.depth = balloon.depth + 1;
        obsBottom.lifeTime = 100;
    }
}
