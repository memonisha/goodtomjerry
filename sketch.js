var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400,200,80,40);
  movingRect=createSprite(100,200,40,80);
  fixedRect.debug=true;
  movingRect.debug=true;

 
}

function draw() {
  background(0); 
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(movingRect.x-fixedRect.x<movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x-movingRect.x<movingRect.width/2 + fixedRect.width/2) {
    movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
  }
  else {
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }

  
  drawSprites();
}