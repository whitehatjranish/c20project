
var r = 0;
var g = 50;
var b=255;
var ball;
// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,400);
  ball=createSprite(20,50,30,30);
}


function draw(){
  background("white");
  ball.x=mouseX;
  if(ball.x<50){
  background(48,100,150);
  
  
  }
  if(ball.x<255&&ball.x>50){
  
  background(10,60,90);
  
  
  }
  if(ball.x>255){
  
  background(20,80,100);
  
  
  }
  drawSprites();
  }
  
  
  
  
  
  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
