const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var blower;
var blowerMouth;
var ball;

function setup() {
  createCanvas(800,400);

  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

  ball = new Ball(width/2+80,height/2-80,80,80);
  blower = new Blower(width/2-50,height/2+50,150,20);
  blowerMouth = new BlowerMouth(width/2+70,height/2+50,100,90);

  button = createButton("Click to Blow");
  button.position(width/2 , height-100); 
  button.class("blowButton");
  button.mousePressed(blow);


}

function draw() {
  background(255,255,255);
  
  Engine.update(engine);
  blow.show();
  blower.show();
  blowerMouth.show();
  
 drawSprites();
}

function blow(){
  Matter.Body.applyForce(ball,body,{x:0, y:0},{x:0, y:0.05});
}