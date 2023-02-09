
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ground

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_option={
		restitution:0.3,
		friction : 0,
		density : 1.2
	   }

	ball = Bodies.circle(260,100,30,ball_option)
	World.add(world,ball)

	ground = new Ground(width/2,670,width,20) 
	left_ground = new Ground(1100,600,20,120)
	right_ground = new Ground(900,600,20,120)
	
    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  ellipse(ball.position.x,ball.position.y,30)
  ground.show()
  left_ground.show()
  right_ground.show()
  
 
} 

function keyPressed(){
  if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball, ball.position,{x:85, y:-85})
  }
}



