const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;


//lvl 1
var block1,block2,block3,block4,block5;
//lvl2
var block6,block7,block8;
//lvl3
var block9,block10;
//lvl4
var block11;


var stand;
var polygon;

var launcher;
var ground;

function preload() {
  polygonImg = loadImage("polygon.png");
}

function setup() {
  createCanvas(1200,650);

  engine = Engine.create();
  world = engine.world;

  stand = new Stand(400,250,250,25);
  //lvl1
  block1 = new Block(350,120,25,50);
  block2 = new Block(375,120,25,50);
  block3 = new Block(400,120,25,50);
  block4 = new Block(425,120,25,50);
  block5 = new Block(450,120,25,50);

  //lvl2
  block6 = new Block(375,95,25,50);
  block7 = new Block(400,95,25,50);
  block8 = new Block(425,95,25,50);
  
  //lvl3
  block9 = new Block(400,70,25,50);

  
 
  polygon = new Polygon(200,50,25);
  launcher = new Launcher(polygon.body,{x:200,y:100});

  
  ground = new Stand(550,1000,1301,1000);
  
  

  Engine.run(engine);
}

function draw() {
  background(0);
  Engine.update(engine);

  fill("indigo");
  stand.display();


  fill("Crimson");
  //lvl1
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  //lvl2
  fill("Aquamarine");
  block6.display();
  block7.display();
  block8.display();
  //lvl3
  fill("Chartreuse");
  block9.display();
  fill("Orchid");
  polygon.display();
  launcher.display();
  fill("Brown");
  ground.display();
  

  drawSprites();
}
function mouseDragged() {
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased() {
  launcher.fly();
}