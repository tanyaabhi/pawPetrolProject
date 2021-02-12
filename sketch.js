const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint=Matter.Constraint;
var pawPetrol;
var child;
var slide,pool;

var engine,world

function preload(){
    backImg=loadImage("backImg4.png");
}

function setup(){
    createCanvas(1200,800)
       engine = Engine.create();
       world = engine.world;
      

       pawPetrol=new PawPetrol(500,200,10,20);

       child=new Child(900,650,10,20);

       pool=new Pool(650,720,10,20);

       slide=new Slide(620,700,10,20);
       
}
function draw(){
    background(0);
    Engine.update(engine);
    imageMode(CENTER)
    image(backImg,400,200,800,400)
    pawPetrol.display();
    child.display();
    pool.display();
    slide.display();

    drawSprites();
}
function mouseDragged(){
    Matter.Body.setPosition(pawPetrol.body, {x: mouseX , y: mouseY})
}

function mouseReleased(){
    
}