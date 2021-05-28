var name = "Rithika"
console.log(name)

var num = 7
console.log(num)

var bool = true
console.log(bool)

var object
console.log(object)

object = null
console.log(object)

var arr1 = [1, 2, 3, 4, 5]
console.log(arr1[2])

var arr2 = ["hello", 7, false]
console.log(arr2)

var arr3 = [[1, 2], [3, 4], [5, 6]]
console.log(arr3[1][0])
arr3.push(8)
console.log(arr3)
arr3.pop()
console.log(arr3)

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var gameState = "onSling"

var engine, world;
var box1, pig1;
var backgroundImg, platform;

var score=0

function preload() {
getBackgroundImage()
}

function setup() {
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600, height, 1200, 20);
    platform = new Ground(150, 305, 305, 170);

    box1 = new Box(700, 320, 70, 70);
    box2 = new Box(920, 320, 70, 70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810, 260, 300, PI / 2);

    box3 = new Box(700, 240, 70, 70);
    box4 = new Box(920, 240, 70, 70);
    pig3 = new Pig(810, 220);

    log3 = new Log(810, 180, 300, PI / 2);

    box5 = new Box(810, 160, 70, 70);
    log4 = new Log(760, 120, 150, PI / 7);
    log5 = new Log(870, 120, 150, -PI / 7);

    bird = new Bird(200, 50);
    // log6 = new Log(100, 100, 100, PI / 2);

    slingshot = new Slingshot(bird.body, { x: 200, y: 50 });
    // chain1=new Chain(pig1.body,pig3.body);


}

function draw() {
    if(backgroundImg)
    background(backgroundImg);
    else
    background(0)

    textSize(35)
    fill(255)
    text("Score: "+score,width-300,50)
    Engine.update(engine);
    // console.log(box2.body.position.x);
    // console.log(box2.body.position.y);
    //  console.log("hello");
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
    // log6.display();

    platform.display();
    bird.display();

    slingshot.display();

    // chain1.display();
}

function mouseDragged() {
    if (gameState !== "launched")
        Matter.Body.setPosition(bird.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
    slingshot.fly()
    gameState = "launched"
}

function keyPressed() {
    if (keyCode === 32&&bird.body.speed<1||bird.body.position.x>width||bird.body.position.x<0) {
        slingshot.attach(bird.body)
        Matter.Body.setPosition(bird.body, { x: 200, y: 50 });
        bird.trajectory=[]
        gameState="onSling"
    }
}

async function getBackgroundImage() {
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Singapore")
    var responseJSON = await response.json()
    console.log(responseJSON.datetime.slice(11, 13))
    var hour = responseJSON.datetime.slice(11, 13)

    if (hour > 06 && hour < 18) {
        backgroundImg = loadImage("sprites/bg.png");
    }
    else {
        backgroundImg = loadImage("sprites/bg2.jpg");
    }
}