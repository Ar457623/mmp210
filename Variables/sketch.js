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
    background("DarkSlateGrey ");
    
    fill("Bisque")
    noStroke();
	ellipse(x, y,faceSize, faceSize/2); //face 
    
   
    fill("White")
    ellipse(400, 180, 98); //right eye
    fill("Black")
    ellipse(400, 180, 60) //right eye 
    
    fill("White")
    ellipse(199, 180, 98); //left eye
    fill("Black")
    ellipse(198, 180, 60)
    

    arc(x,220, 145, 100, 0, PI); //mouth
    fill("BlanchedAlmond ")
    strokeWeight(10);
    arc(x, y,  70, 100, 0, PI); //nose
    
    fill("	#3c6090")
    arc(x, x, x, 100, 0, PI); //hat 
    ellipse(x, 50, 250, 150);//hat
    ellipse(240, 50, 250, 150);//hat
    ellipse(360, 50, 250, 150);//hat
    
    fill("#987676")
    rect(124, 30, 355, 55, 20);
    
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
}