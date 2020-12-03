
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(300, 400, 13);

  ground = new Ground(500, 480, 1000, 20);
  bar1=new Bar(380,750,180,20)
  leftSide = new Dustbin(750, 380, 20, 180);
  bottom = new Dustbin(810, 460, 100, 20);
  rightSide = new Dustbin(870, 380, 20, 180);

  wall1 = new Dustbin(1000, 300, 10, 1000);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  

  background(0);
  
  Engine.update(engine);

  paper.display();

  ground.display();

  leftSide.display();
  bottom.display();
  rightSide.display();

  bar1.display()

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x:20, y: -35})
  }
}
