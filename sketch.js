const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
let engine;
let world;
var ball;
var g1;
var con;

function preload() {
 bg = loadImage("background.png")
 bunny = loadAnimation("Rabbit-01.png")
 bunnyeating = loadAnimation("eat_1.png","eat_2.png","eat_3.png","eat_4.png")
 fruiti = loadImage("melon.png")
}


function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  
  world = engine.world;

  G1=new ground(600,550,1200,10);
b1=new Ball(0,300,50);
fruit = createSprite(0,300,50,50)
fruit.addImage(fruiti)
fruit.scale=0.1
c1=new Chain(b1.body,{x:600,y:20})
  rabbit= createSprite(600,500,100,40)
  rabbit.addAnimation("waiting",bunny)
  rabbit.addAnimation("eating",bunnyeating)
  rabbit.scale=0.3
 imageMode (CENTER)
    
 button = createImg('cut_button.png');
  button.position(580,10);
   button.size(50,50);
  button.mouseClicked(drop)
  
  
  
}

function draw() 
{
  background("blue");
  image(bg,600,300,1200,600)
  Engine.update(engine);
fruit.x=b1.body.position.x
fruit.y=b1.body.position.y
c1.display()
 
 drawSprites()
 rabbit.x=mouseX
if(fruit.isTouching(rabbit)){
  rabbit.changeAnimation("eating")
  fruit.visible=false
}
}

function drop(){
  c1.chainBreak() 
}
  


function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(b1.body,{x:0,y:0},{x:0.05,y:0});
    }

}

