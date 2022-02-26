const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var forest
var mainbirdImg 
var bird  
var bearImg
var bear;
var bg,bg2,bg3;

var star;
var wall1,wall2,wall3,wall4

function preload()
{
  forest=loadAnimation("./images/forest1.png","./images/forest2.png","./images/forest3.png","./images/forest4.png","./images/forest5.png",) 
  mainbirdImg=loadAnimation("./images/Bird1.png","./images/Bird2.png","./images/Bird3.png","./images/Bird4.png");
  bearImg=loadImage("./images/angrybear.png")
}

function setup() 
{
  createCanvas(windowWidth,windowHeight); 

  engine = Engine.create();
  world = engine.world;
  
  bg = createSprite(800,300,900,500);
  bg.scale=2;
  bg.addAnimation("bg",forest);
  bg.frameDelay = 10

  bg2 = createSprite(2400,300,900,500);
  bg2.scale=2;
  bg2.addAnimation("bg",forest);
  bg2.frameDelay = 10

  bg3 = createSprite(4000,300,900,500);
  bg3.scale=2;
  bg3.addAnimation("bg",forest);
  bg3.frameDelay = 10

 //bg.x = bg.width/2

  bird=createSprite(200,200,20,20) 
  //bear=createSprite(600,600,50,50) 
  bird.addAnimation("bird",mainbirdImg) 
  bird.scale=0.2 
  bird.velocityX = 3;

  wall1=createSprite(1600,100,20,500);
  wall2=createSprite(1600,700,20,500);

  wall3=createSprite(3200,0,20,300);
  wall4=createSprite(3200,600,20,500);
  
  wall1.shapeColor= "red";
  
}

function draw() 
{
  background(51);

  Engine.update(engine);

  console.log(frameCount);

  bg.velocityX = -2
  bg2.velocityX = -2
  bg3.velocityX = -2

  wall1.velocityX = -2;
  wall2.velocityX = -2;

  wall3.velocityX = -2;
  wall4.velocityX = -2

  if(bg3.x<1000){
    bg3.x= bg3.width/2
  }
  if(keyDown("UP_ARROW")){
    bird.velocityY=-5
  }
  if(keyDown("DOWN_ARROW")){
    bird.velocityY=5
  }  
  if(keyDown("RIGHT_ARROW")){
    bird.velocityX=5
  }  
  if(keyDown("LEFT_ARROW")){
    bird.velocityX=-3
  }

  if (frameCount%200===0) {
    bear=createSprite(600,600,50,50)
    bear.addImage(bearImg) 
    bear.scale=0.8 
    bear.velocityX=-6  
    bear.velocityY=-6
    bear.y=Math.round(random(50,600)) 
    bear.x=Math.round(random(600,50))
  }
   
  bird.velocityY+=0.1;

  if(frameCount >= 1500){
  star = createSprite(width-100,300,100,100)
  }


  drawSprites();

}

