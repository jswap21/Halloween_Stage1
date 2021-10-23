var bat,batImg;

var bgImg;


function preload(){
//bat image
  batImg=loadImage("Images/bat1.png");
  bgImg=loadImage("Images/TTImg.jpg");
}

function setup() {
createCanvas(displayWidth,displayHeight);
  
 
bat=createSprite(displayWidth/2,displayHeight/2,30,50);
bat.addImage(batImg)
bat.scale=2;


}


function draw() {
  background(bgImg);
//moving bat with mouse  
bat.x=World.mouseX;
bat.y=World.mouseY;

  textSize(40);
  fill("white");
  text("Allow bat to collect treats by moving mouse pointer."
  ,displayWidth/6,displayHeight/4+50);
  text("Beware from ghost!!Game ends if bat touches the ghost. "
  ,displayWidth/2-400,displayHeight/4+120);
  text("Hit 'Enter' to start the game... ",
  displayWidth/2-300,displayHeight/2);
  textSize(60)
  text("Happy Halloween",displayWidth/2,displayHeight-200);

    
 drawSprites(); 
}
