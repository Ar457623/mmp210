/*
 /*
 self portriat with veriables
 by Alex
 9/17/2019
*/


var faceSize = 300;
var x= 300;
var y= 200;


function setup() {
    createCanvas(600, 400);
    
    
    
  
}

function draw() {
   
    
       	background(300); 
    	fill("green");
	ellipse(frameCount, 200, 160);
    
    
    background("white");

    fill("BLACK")
    noStroke();
	ellipse(x, y,faceSize, 160); //face 
    
    
    

    fill("red")
    ellipse(mouseX,mouseY,350, 200, 98); //right eye
    fill("White")
     ellipse(400, 180, 98)
    fill("BLACK")
    ellipse(400, 180, 60) //right eye 
    
    fill("White")
    ellipse(199, 180, 98); //left eye
    fill("Black")
    ellipse(198, 180, 60)
    

    arc(x,240, 200, 100, 0, PI); //mouth
    fill("BlanchedAlmond ")
    strokeWeight(10);
    arc(x, y,  80, 100, 0, PI); //nose
    
    
    
     fill("black")
     arc(270, 125,  20, 105, 0, PI);
    arc(290, 125,  20, 105, 0, PI);
    arc(310, 125,  20, 105, 0, PI);
    arc(330, 125,  20, 105, 0, PI);
    
    
    
    
    
    fill("	#3c6090")
    arc(x, x, x, 300, 0, PI); //hat 
    ellipse(x, 50, 100, 150);//hat
    ellipse(240, 55, 250, 150);//hat
    ellipse(360, 55, 250, 150);//hat
    
    fill("#987676")
    rect(124, 30, 355, 55, 20);
    
    textSize(20);
    fill("white")
   text('MOVE MOUSE',235,360);
text('FOR A NEW FACE',220,380);
    
    
   
    
}
    

