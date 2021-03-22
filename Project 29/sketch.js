var Pinkbox
var Bluebox
var Tealbox
var Greybox
var Ground
var Red
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

   
Pinkbox = new Pink(100,100,70);
	ground = new Ground(200,height,400,20)
 Bluebox = new Blue (350,375,20,170)
Tealbox = new Teal (220,375,20,170)
Greybox = new Grey (370,375,350,20)
Red = new Redline (370,375,350,20)
}


function draw(){
    background("black");
    Engine.update(engine);
    Pinkbox.display();
   ground.display();
   Bluebox.display();
   Tealbox.display();
   Greybox.display();
   Red.display();
}