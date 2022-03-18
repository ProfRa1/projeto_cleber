const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine;
let world;
var ball;
var ground;
var wedge;
var angle=60;
var poly;


function setup() {
  
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ssjfjfhfhfumnfimiiii_options = {
    restitution : 0.03,
    frictionAir : 0.03
  }
  var pdc_options = {
    restitution : 0.95,
    frictionAir : 0.01
  }
  var borges_options = {
    restitution : 1.576543567898097865543132454678897686543357898900998765642322312112345678,
    frictionAir : 0.0001
  }

  
  //ssjfjfhfhfumnfimiiii

  var ground_options = {
    isStatic : true
  }

  

  ball = Bodies.circle(100,10,20,pdc_options);
  World.add(world,ball);
  pdc = Bodies.circle(100,10,78,pdc_options);
  World.add(world,pdc);
  borges = Bodies.rectangle(278,10,78,78, borges_options);
  World.add(world,borges);
  ssjfjfhfhfumnfimiiii = Bodies.rectangle(50,10,97,87, ssjfjfhfhfumnfimiiii_options);
  World.add(world,ssjfjfhfhfumnfimiiii);
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
 background (51);
 Engine.update(engine);
 rect(ssjfjfhfhfumnfimiiii.position.x, ssjfjfhfhfumnfimiiii.position.y, 78,78);
 rect(borges.position.x, borges.position.y, 78,78)
 rect(ground.position.x,ground.position.y,400,20);
 ellipse(pdc.position.x,pdc.position.y, 78);
 fill(36, 189, 133)
 stroke(36, 189, 133)
}

