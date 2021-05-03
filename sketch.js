
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,550,800,20)
    box1=new box(650,530,200,30)
	box2=new box(550,445,30,200)
	box3=new box(750,445,30,200)
	ball1=new ball(100,440,20,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  ball1.display();
  
  drawSprites();
 
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
     // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
 Matter.Body.applyForce(ball1.body,ball1.body.position,{x:22,y:-22})
     
   }
 }




