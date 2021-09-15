const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var enogne, world;
var bgimg;
var snow1, snow2, snow3, snow4, snow5;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  snow1 = new Snow(100,400);
  snow2 = new Snow(200,400);
  snow3 = new Snow(300,400);
  snow4 = new Snow(400,400);
  snow5 = new Snow(500,400);
}

function preload(){
  bgimg = loadImage("snow3.jpg");
}

function draw() {
  background(bgimg);
  
  Engine.update(engine);
  snow1.display();
  snow1.updateY();
  snow2.display();
  snow2.updateY();
  snow3.display();
  snow3.updateY();
  snow4.display();
  snow4.updateY();
  snow5.display();
  snow5.updateY();
  drawSprites();
}