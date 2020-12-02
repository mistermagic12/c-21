var fixedRect, movingRect;
var rect1,rect2

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = false;
  fixedRect.velocityX=-2

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = false;

   rect1 = createSprite(200, 400, 50, 80);
  rect1.shapeColor = "green";
  rect1.debug = false;
  rect1.velocityX=2

  rect2 = createSprite(100,200,80,30);
  rect2.shapeColor = "green";
  rect2.debug = false;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;


  bounceOff(rect1,fixedRect)
 
 if(isTouching(rect1,movingRect)) 
  
  
  {
    movingRect.shapeColor = "red";
    rect1.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    rect1.shapeColor = "green";
  }
  drawSprites();
}





