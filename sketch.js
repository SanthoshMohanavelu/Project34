
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground, ground1;
var bg_image;
//var supplycrate, supplycrate_image;
var cannon, cannon_image
var box, box1, box2; 
var button1, button2, button3, button4;
var wall, wall1, wall2;

function preload() {

  bg_image = loadImage("Bg.png")
  supplycrate_image = loadImage("SupplyCrate.png")

}



function setup() {
  createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  
  //supplycrate = createSprite(200,500,20,20)
  //supplycrate.addImage("crate", supplycrate_image)

  //Ground
  ground = new Ground(290,700,600,50)
  ground1 = new Ground(1400,700,600,50)


  box = new Box(1370,600,30,30)
  box1 = new Box(1270,600,30,30)

  wall = new Wall(-15,300,50,900)
  wall1 = new Wall(800,-15,1600,50)
  wall2 = new Wall(1535,400,50,900)



  button1 = createButton("Going UP")
  button1.position(1370, 100)
  button1.class("blowButton")
  button1.mouseClicked(blow)
  button1.size(70,70)

  button2 = createButton("Going LEFT")
  button2.position(1370,180)
  button2.class("leftButton")
  button2.mouseClicked(blow1)
  button2.size(70,70)

  button3 = createButton("Going UP1")
  button3.position(1270,100)
  button3.class("blowButton")
  button3.mouseClicked(blow2)
  button3.size(70,70)

  button4 = createButton("Going LEFT1")
  button4.position(1270,180)
  button4.class("leftButton")
  button4.mouseClicked(blow3)
  button4.size(70,70)
}


function draw() 
{
  background(51);
  image(bg_image, 0, 0, width, height)

  Engine.update(engine);

  
  text("Get the Magical Blocks to the other side without it going out of the border", 620,300)
  
 


  ground.show()
  ground1.show()

  box.display()
  box1.display()

  wall.display()
  wall1.display()
  wall2.display()
  
}


function blow() {
  Matter.Body.applyForce(box.body, {x:0, y:0}, {x:0, y:-0.01})

}

function blow1() {
  Matter.Body.applyForce(box.body, {x:0, y:0}, {x:-0.01, y: 0})
  
}

function blow2() {
  Matter.Body.applyForce(box1.body, {x:0, y:0}, {x:0, y:-0.01})

}

function blow3() {
  Matter.Body.applyForce(box1.body, {x:0, y:0}, {x:-0.01, y:0})

}