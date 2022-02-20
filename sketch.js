
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


function setup() {

	createCanvas(1600, 700);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    isStatic: false,
    restitution: 0.3,
    friction: 0,
    density:0.5
  }

   var ground_options = {
     isStatic: true
   };
  
  
  
   groundObj=new ground(width/2,670,width,20);
   leftSide = new ground(1100,600,20,120);
   rightSide = new ground(1350,600,20,120);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);


}

//Fun
function draw() {
  background(51);
  Engine.update(engine);

  rectMode(CENTER);
  ellipseMode(RADIUS);

  ellipse(ball.position.x,ball.position.y,20);
  groundObj.display();
  leftSide.display();  
  rightSide.display();

	if(keyWentDown("up_arrow")){

    Matter.Body.applyForce(ball,ball.position,{x:38,y:-39});
    
	}
  
  
}

