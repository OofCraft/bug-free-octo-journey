
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,rock,mango,slingshot;
var child, kid;
var tree, img;
var mango1, mango2, mango3, mango4, mango5;

function preload()
{
	kid = loadImage("boy.png");
	img = loadImage("tree.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	child = createSprite(170,610,50,100)
	child.addImage(kid, "boy")
	child.scale = 0.1;
	tree = createSprite(600,400,50,50);
	tree.addImage(img, "tree");
	tree.scale=0.45
	ground = new Ground(400,680,800,20);
	rock = new Stone(40,40,10);
	//mango = new Mango(50,50,10);
	mango1 = new Mango(650,300,20,20);
	slingshot = new Elastic(rock.body,{x:120, y:520});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  drawSprites();

 ground.display();
 rock.display();
 mango1.display();
// mango.display();
 detectCollision(rock,mango1);
}

function mouseDragged(){
    Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function detectCollision(stone,mango){
	mangoBodyPosition=mango.body.position;
	stoneBodyPosition=stone.body.position;

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if (distance<=mango.r+stone.r){
		Matter.Body.setStatic(mango.body,false);
	}
}
