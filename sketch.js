var cat, mouse, cat_image, mouse_image, cat_moving,cat_colided, mouse_colided,mouse_image2;
var background, background_image, invisibleGround

var gameState;
var PLAY=1;
var END=0


function preload() {
    //load the images here
     cat_image= loadImage("tomFour.png");
     cat_moving= loadAnimation("tomTwo.png","tomThree.png");
     cat_colided= loadImage("tomOne.png");
     mouse_image2= loadAnimation("jerryThree.png");
     mouse_image= loadImage("jerryFour.png");
     background_image= loadImage("garden.png");
     mouse_colided= loadImage("jerryTwo.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat= createSprite(300,350,20,30);
 cat.addImage(cat_image);
 cat.scale0=0.7;

 mouse= createSprite(700,350,20,30);
mouse.addImage(mouse_image);
 mouse.scale0=0.7;

 background= createSprite(500,400,20,30);
background.addImage(background_image);
 
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
if(gameState===PLAY){
    
    cat.velocityX=3;
    cat.changeImage("cat_moving");
    mouse.changeImage("mouse_image2");

    if(cat.collied(mouse)){
        keyPressed();
    }
}

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(cat.isTouscing (mouse)){
cat.changeImage(cat_colided);
mouse.changeImage(mouse_colided);
cat.velocityX=0;

}

}
