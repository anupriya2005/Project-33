var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var particle;

var divisionHeight=300;
var score =0;
var turn = 0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
}
 
function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  
  if(frameCount % 60 === 0){
     particles.push ( new particle ( random (width/2-30, width/2+30), 10,10));
     score++;
   }

   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
   }
 
  for (var j = 0; j < particles.length; j++) {
     particles[j].display();
   }

   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }

   for (var k = 0; k >=width; k = k + 80) {
    division.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

   for (var j = 75; j >=width; j=j+50) 
   {
      plinkos.push(new Plinko(j,75));
   }

   for (var j = 50; j >=width-10; j=j+50) 
   {
      plinkos.push(new Plinko(j,175));
   }

    for (var j = 75; j >=width; j=j+50) 
   {
      plinkos.push(new Plinko(j,275));
   }

    for (var j = 50; j >=width-10; j=j+50) 
   {
      plinkos.push(new Plinko(j,375));
   }

   if(particles!= null)
   {
    particles.display();

    if(particles.body.position.y>1)
    {
if (particles.body.position.x <300)
{
score = score+500;
particles = null;
if(count>=5){
  gameState = "end"
}
}
    }
   }

   if(particles!= null)
   {
    particles.display();

    if(particles.body.position.y>301)
    {
if (particles.body.position.x <600)
{
score = score+100;
particles = null;
if(count>=5){
  gameState = "end"
}
}
    }
   }

   if(particles!= null)
   {
    particles.display();

    if(particles.body.position.y>601)
    {
if (particles.body.position.x <900)
{
score = score+00;
particles = null;
if(count>=5){
  gameState = "end"
}
}
    }
   }
   text("Score:", 100,700);
}


function mousePressed()
{
  if(gameState!=="end"){
count++;
particles = new particle(mouseX, 10, 10, 10);
  }
}