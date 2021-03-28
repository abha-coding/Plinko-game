const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() 
{
  createCanvas(480,700);

  engine = Engine.create();
	world = engine.world;

  ground = new Ground(200,650,100,20);

  Engine.run(engine);

  //createSprite(400, 200, 50, 50);
}

function draw() 
{
  background("black");  

  Engine.update(engine);

  rectMode(CENTER);

  ground.display();

  drawSprites();
}