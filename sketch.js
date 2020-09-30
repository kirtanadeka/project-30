const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var gs= "on";

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

//1st level
block1 = new Box(300,265,30,40);
block2 = new Box(330,265,30,40);
block3 = new Box(360,265,30,40);
block4 = new Box(390,265,30,40);
block5 = new Box(420,265,30,40);
block6 = new Box(450,265,30,40);
block7 = new Box(480,265,30,40);
//2nd level
block8 = new Box(330,230,30,40);
block9 = new Box(360,230,30,40);
block10 = new Box(390,230,30,40);
block11 = new Box(420,230,30,40);
block12 = new Box(450,230,30,40);
//3rd level  
block13 = new Box(360,195,30,40);
block14 = new Box(390,195,30,40);
block15 = new Box(420,195,30,40);
//4th level
block16 = new Box(390,155,30,40);


  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255); 
  
  Engine.update(engine);

  textSize(20); 
  fill("lightyellow");
   text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30); 
   ground.display();
  stand1.display();
  stand2.display();
 strokeWeight(2); stroke(15);
  fill("skyblue");
 block1.display();
 block2.display(); 
 block3.display(); 
 block4.display();
 block5.display();
 block6.display();
 block7.display();
  fill("pink");
 block8.display();
 block9.display();
 block10.display(); 
 block11.display();
 block12.display(); 
   fill("turquoise");
 block13.display();
 block14.display();
 block15.display();
  fill("grey");
 block16.display();
 slingShot.display();
 
  drawSprites();
}

function mouseDragged(){
  if(gs === "on"){
      Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  }
  
}

function mouseReleased(){
  slingshot.fly();
  gs = "launched";
}

function keyPressed(){
  if(keyCode === 32){
     slingshot.attach(this.polygon);

  }
}