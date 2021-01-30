
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	boy=loadImage("boy.png")
}

function setup() {
	createCanvas(1300,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
stone=new Stone(235,420,30)
mango1=new Mango(1100,100,30)
mango2=new Mango(1170,130,30)
mango3=new Mango(1010,140,30)
mango4=new Mango(1000,70,30)
mango5=new Mango(1100,70,30)
mango6=new Mango(1000,230,30)
mango7=new Mango(900,230,40)
mango8=new Mango(1140,150,40)
mango9=new Mango(1100,230,40)
mango10=new Mango(1200,200,40)
mango11=new Mango(1120,250,40)
mango12=new Mango(900,160,40)
tree= new Tree(1050,580)
ground=new Ground(width/2,600,width,20)
launcher=new Launcher(stone.body,{x:235,y:420})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  textSize(25)
  text("Press Space To Get A 2nd Chance",50,50)
image(boy,200,340,200,300)
stone.display()
tree.display()
launcher.display()
mango1.display()
mango2.display()
mango3.display()
mango4.display()
mango5.display()
mango6.display()
mango7.display()
mango8.display()
mango9.display()
mango10.display()
mango11.display()
mango12.display()
ground.display()
detectcollision(stone,mango1)
detectcollision(stone,mango2)
detectcollision(stone,mango3)
detectcollision(stone,mango4)
detectcollision(stone,mango5)
detectcollision(stone,mango6)
detectcollision(stone,mango7)
detectcollision(stone,mango8)
detectcollision(stone,mango9)
detectcollision(stone,mango10)
detectcollision(stone,mango11)
detectcollision(stone,mango12)



  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	launcher.fly()

}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:235,y:420})
		launcher.attach(stone.body)
	}
}

function detectcollision(stone,mango){
stonePosition=stone.body.position
mangoPosition=mango.body.position
var distance=dist(stonePosition.x,stonePosition.y,mangoPosition.x,mangoPosition.y)
if(distance<=mango.r+stone.r){
	Matter.Body.setStatic(mango.body,false)
}

}