
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bob1,roof,chain;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 650);

  
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     bob1=new Pendulum(600,200)
     bob2=new Pendulum(650,200)
     bob3=new Pendulum(700,200)
     bob4=new Pendulum(550,200)
     bob5=new Pendulum(500,200)
     roof=new Roof(600,200,250,20)
     chain=new Chain(bob1.body,{x:600,y:200})
     chain1=new Chain(bob2.body,{x:650,y:200})
     chain2=new Chain(bob3.body,{x:700,y:200})
     chain3=new Chain(bob4.body,{x:550,y:200})
     chain4=new Chain(bob5.body,{x:500,y:200})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue")
  Engine.update(engine)
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  chain.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
}

function keyPressed(){
  if (keyCode=UP_ARROW){
    Body.applyForce(bob5.body,bob2.body.position,{x:-60,y:-60})
}
}
