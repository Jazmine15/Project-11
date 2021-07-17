var path, trackmoving;
var runner, runnerrunning, edges;

function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  runnerrunning = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.scale = 1.2;

  runner = createSprite(200,340);
  runner.addAnimation("running", runnerrunning);
  runner.scale = 0.05;

  edges = createEdgeSprites();
}

function draw() {
  background(0);
  path.velocityY = 4;

  if(path.y > 400){
    path.y = height/2;
  }

  drawSprites();
}
