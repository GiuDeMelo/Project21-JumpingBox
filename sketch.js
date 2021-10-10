var screen;
var box1,box2,box3,box4;
var aarestas1,arestas2,arestas3;
var ball;
var music;

function preload(){
   music = loadSound ("music.mp3")
}

function setup(){
    screen = createCanvas(800,600);

    box1 = createSprite(805,580,360,30);
     box1.shapeColor = "blue";

    box2 = createSprite(510,580,200,30);
     box2.shapeColor = "yellow";

    box3 = createSprite(0,580,360,30);
     box3.shapeColor = "red";

    box4 = createSprite(295,580,200,30);
     box4.shapeColor = "green";

    ball = createSprite(random(20,750),100,40,40);
     ball.shapeColor = rgb(255,255,255);
     ball.velocityY = 5;
     ball.velocityX = 9;

    arestas1 = createSprite(400,0,800,10);
     arestas1.shapeColor = "grey";
    arestas2 = createSprite(0,300,10,800);
     arestas2.shapeColor = "grey";
    arestas3 = createSprite(800,300,10,800);
     arestas3.shapeColor = "grey";
    arestas4 = createSprite(400,600,800,10);
     arestas4.shapeColor = "grey";

}

function draw() {
    background(rgb(169,169,169));

    music.play();

    ball.bounceOff(arestas1);
    ball.bounceOff(arestas2);
    ball.bounceOff(arestas3);
    ball.bounceOff(arestas4);

    //ball.bounceOff(box1);
    //ball.bounceOff(box2);
    //ball.bounceOff(box3);
    //ball.bounceOff(box4);

    if(box1.isTouching(ball)){
        ball.shapeColor = "blue";
        ball.bounceOff(box1);
    }

    if(box2.isTouching(ball)){
        ball.shapeColor = "yellow";
        ball.bounceOff(box2)
    }

    if(box3.isTouching(ball)){
        ball.shapeColor = "red";
        ball.bounceOff(box3);
    }

    if(box4.isTouching(ball)){
        ball.shapeColor = "green";
        ball.bounceOff(box4);
    }

    drawSprites();
}