var pin1,pin2,pin3,pin4,pin5,pin6,pin0;
var edge;

function preload(){
}

function setup(){
    canvas = createCanvas(400,400);

    edge = createEdgeSprites();

    pin1 =createSprite(200,300,20,20);
    pin2 =createSprite(180,320,20,20);
    pin3 =createSprite(220,320,20,20);
    pin4 =createSprite(160,340,20,20);
    pin5 =createSprite(200,340,20,20);
    pin6 =createSprite(240,340,20,20);
    pin0 =createSprite(200,100,20,20);

    pin0.shapeColor = "white"

    pin0.velocityY = 0.5
    pin0.velocityX = 4
}

function draw(){
    background(220);

    pin1.bounceOff(edge)
    pin2.bounceOff(edge)
    pin3.bounceOff(edge)
    pin4.bounceOff(edge)
    pin5.bounceOff(edge)
    pin6.bounceOff(edge)
    pin0.bounceOff(edge)

    pin0.bounce(pin1)
    pin0.bounce(pin2)
    pin0.bounce(pin3)
    pin0.bounce(pin4)
    pin0.bounce(pin5)
    pin0.bounce(pin6)

    pin1.bounce(pin2)
    pin1.bounce(pin3)
    pin1.bounce(pin4)
    pin1.bounce(pin5)
    pin1.bounce(pin6)

    pin2.bounce(pin3)
    pin2.bounce(pin4)
    pin2.bounce(pin5)
    pin2.bounce(pin6)

    pin3.bounce(pin4)
    pin3.bounce(pin5)
    pin3.bounce(pin6)

    pin4.bounce(pin5)
    pin4.bounce(pin6)

    pin5.bounce(pin6)

    drawSprites()
}
